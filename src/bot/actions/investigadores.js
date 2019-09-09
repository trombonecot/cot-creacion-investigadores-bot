import WizardScene from 'telegraf/scenes/wizard';
import db from '../../bd';
import { ocupaciones } from '../investigator/ocupaciones';
import Investigador from '../investigator';
import { generateCaracteristicas, calcularAttributosCombat } from '../mutations/caracteristicas';
import { adaptarEdad } from '../mutations/edad';
import { getOcupaciones, printHabilidadesCustom, printHabilidades, getHabilidadForCustom, getHabilidad } from './utils';
import { printInvestigador } from '../services/generator';


export function addInvestigador() {
    let investigador = {},
        habilidad = null;

    const addWizard = new WizardScene('add-investigador',
        (ctx) => {
            //1
            ctx.reply('Nuevo investigador para los años 20.\nEscoge nombre:');
            return ctx.wizard.next()
        },
        (ctx) => {
            //2
            investigador = new Investigador(ctx.from.id, ctx.message.text);
            generateCaracteristicas(investigador);

            ctx.reply('Edad del investigador:');
            return ctx.wizard.next();
        },
        (ctx) => {
            //3
            const edad = ctx.message.text;

            if (isNaN(edad) || edad < 15 || edad > 88) {
                ctx.reply('Edad incorrecta. Introduce una edad entre 15 y 88:');
            } else {
                investigador.setEdad(edad);
                adaptarEdad(investigador);

                ctx.reply(getOcupaciones())

                return ctx.wizard.next()
            }
        },
        (ctx) => {
            //4
            const ocupacionIndex = ctx.message.text;

            if (isNaN(ocupacionIndex) || ocupacionIndex > Object.keys(ocupaciones).length) {
                ctx.reply('Ocupación incorrecta. Elige una:')
            } else {
                investigador.setOcupacion(Object.keys(ocupaciones)[ocupacionIndex-1]);
                

                let text = '';
                if (investigador.ocupacion.customHabilidades.length > 0 ) {
                    text += printHabilidadesCustom(text, investigador);
                } else {
                    text += printHabilidades(text, investigador);
                    ctx.wizard.selectStep(6);
                }

                ctx.reply(text);
                return ctx.wizard.next()
            }
        },
        (ctx) => {
            //5
            const hab = ctx.message.text;

            if (isNaN(hab)){
                ctx.reply('Escoge una habilidad indicando el número de habilidad (que sea de ocupación):');
            }else {
                habilidad = getHabilidadForCustom(investigador, hab-1);

                investigador.setHabilidadOcupacion(habilidad);

                let text = `${habilidad} asignada como habilidad de ocupación. \n`;
                if (investigador.ocupacion.customHabilidades.length == 0) {
                    text += printHabilidades(text, investigador);
                    ctx.reply(text);
                    return ctx.wizard.next();
                } else {
                    text +=  printHabilidadesCustom(text, investigador);
                    ctx.reply(text);
                }
            }
        },
        (ctx) => {
            //6
            const hab = ctx.message.text;

            if (isNaN(hab)){
                ctx.reply('Escoge una habilidad indicando el número de habilidad (que sea de ocupación):');
            }else {
                habilidad = getHabilidad(investigador, hab-1);

                if (!investigador.habilidades[habilidad].class) {
                    ctx.reply(`Tienes que escoger una habilidad de tu ocupación.`);
                } else {
                    ctx.reply(`${habilidad} tiene actualmente ${investigador.habilidades[habilidad].value} puntos.\n ¿Cuantos puntos (${investigador.puntos_habilidad} disponibles) quieres gastar?`);
                    return ctx.wizard.next()
                }
            }
        },
        (ctx) => {
            // 7
            let puntos = ctx.message.text;

            if (isNaN(puntos) || puntos < 0 || puntos > investigador.puntos_habilidad || (investigador.habilidades[habilidad].value + parseInt(puntos) > 99)){
                ctx.reply('Una habilidad sólo puede llegar a 99 puntos.');
            } else {
                investigador.setPuntosHabilidad(puntos);

                if (investigador.puntos_habilidad > 0) {
                    ctx.reply('Escoge una habilidad indicando el número de habilidad:');
                    return ctx.wizard.back();
                } else {
                    let text = 'Todos los puntos de ocupación agotados!\n';

                    investigador.puntos_habilidad = investigador.caracteristicas.int * 2;

                    text += printHabilidades(text, investigador, false);
                    ctx.reply(text);
                    return ctx.wizard.next()
                }
            }
        },
        (ctx) => {
            //8
            const hab = ctx.message.text;

            if (isNaN(hab)){
                ctx.reply('Escoge una habilidad indicando el número de habilidad:');
            }else {
                habilidad = getHabilidad(investigador, hab-1);

                ctx.reply(`${habilidad} tiene actualmente ${investigador.habilidades[habilidad].value} puntos.\n ¿Cuantos puntos (${investigador.puntos_habilidad} disponibles) quieres gastar?`);
                return ctx.wizard.next()
            }
        },
        (ctx) => {
            // 9
            let puntos = ctx.message.text;

            if (isNaN(puntos) || puntos < 0 || puntos > investigador.puntos_habilidad || (investigador.habilidades[habilidad].value + parseInt(puntos) > 99)){
                ctx.reply('Una habilidad sólo puede llegar a 99 puntos.');
            } else {
                investigador.habilidades[habilidad].value += parseInt(puntos);
                investigador.puntos_habilidad -= parseInt(puntos);

                if (investigador.puntos_habilidad > 0) {
                    ctx.reply('Escoge una habilidad indicando el número de habilidad:');
                    return ctx.wizard.back();
                } else {
                    calcularAttributosCombat(investigador);

                    ctx.reply(printInvestigador(investigador));

                    db.insert(investigador);
                    return ctx.scene.leave();
                }
            }
        }
    );

    return addWizard;
}

export function list(ctx) {
    let text = 'Investigadores creados:\n';

    return db.find( { playerId: ctx.from.id }).then((investigadores) => {
        investigadores.forEach((inv, i) => {
            text += `${i}: ${inv.name} (${inv.ocupacion.name})\n`;
        });

        ctx.reply(text);
   });
}

export function add(ctx) {
    ctx.scene.enter('add-investigador')
}

export function addDetailWizard() {
    let investigador = {};

    const addWizard = new WizardScene('view-investigador',
        (ctx) => {
            list(ctx).then(() => {
                ctx.reply('¿Qué investigador quieres ver?');
                return ctx.wizard.next();
            });
        },
        (ctx) => {
            // 9
            let investigador = ctx.message.text;

            db.find( { playerId: ctx.from.id }).then((investigadores) => {
                if (isNaN(investigador) && investigadores.length > investigador ){
                    ctx.reply('Escoge un investigador existente');
                } else {
                    ctx.reply(printInvestigador(investigadores[investigador]));
                    return ctx.scene.leave();
                }
           });
        }
    );

    return addWizard;
}

export function detail(ctx) {
    ctx.scene.enter('view-investigador')
}