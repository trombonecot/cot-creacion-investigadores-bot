import WizardScene from 'telegraf/scenes/wizard';
import Markup from 'telegraf/markup';
import db from '../../bd';
import { ocupaciones } from '../investigator/ocupaciones';
import { habilidades } from '../investigator/habilidades';
import { generateCaracteristicas, calculaAtributosDerivados } from '../services/generator/caracteristics';
import { adaptarEdad } from '../services/generator/age';
import { calcularMOV } from '../services/generator/movement';

function getOcupaciones() {
    let text = 'Elige una ocupacion (usa el número para indicar cual):\n',
        i = 1;

    Object.keys(ocupaciones).forEach((ocupacio) => {
        text += `${i}: ${ocupacio}\n`;
        i++;
    });

    return text;
}

function printInvestigador(investigador) {
    let text = `Nombre: ${investigador.name}\n`;
    text += `Ocupación: ${investigador.ocupacion}\n`;
    text += `Edad: ${investigador.edad}\n`;
    text += `===============\n`;
    text += `Características\n`;
    text += `===============\n`;
    Object.keys(investigador.caracteristicas).forEach((hab) => {
        const valor = investigador.caracteristicas[hab];
        text += `${hab.toUpperCase()}: ${valor}/${Math.floor(valor/2)}/${Math.floor(valor/5)}\n`;
    });
    text += `===============\n`;
    text += `Puntos de vida: ${investigador.vida}\n`;
    text += `Puntos de magia: ${investigador.magia}\n`;
    text += `Puntos de cordura: ${investigador.cordura}\n`;
    text += `Puntos de suerte: ${investigador.suerte}\n`;
    text += `===============\n`;
    text += `Habilidades\n`;
    text += `===============\n`;
    Object.keys(investigador.habilidades).forEach((hab) => {
        const valor = investigador.habilidades[hab].value;
        text += `${hab}: ${valor}/${Math.floor(valor/2)}/${Math.floor(valor/5)}\n`;
    });
    text += `===============\n`;
    text += `Combate\n`;
    text += `===============\n`;
    text += `Bonif. Daño: ${investigador.bd}\n`;
    text += `Corpulencia: ${investigador.corpulencia}\n`;

    const esquivar = investigador.habilidades.esquivar.value;
    text += `Esquivar: ${esquivar}/${Math.floor(esquivar/2)}/${Math.floor(esquivar/5)}\n`;

    return text;
}

function calcularPuntos(investigador, formula) {
    const sums = formula.split('+');

    let result = 0;
    sums.forEach((multiplication) => {
        if (multiplication.indexOf('*')>-1){
            const splittedMulti = multiplication.split('*'),
            hab = splittedMulti[0];
        
            result += investigador.caracteristicas[hab] * splittedMulti[1];
        } else if (multiplication.indexOf('/')> -1) {
            const splittedMulti = multiplication.split('/'),
            hab = splittedMulti[0];
        
            result += Math.floor(investigador.caracteristicas[hab] / splittedMulti[1]);
        } else {
            result += investigador.caracteristicas[multiplication];
        }
    });

    return result;
}

function adoptarOcupacion(investigador, ocupacionKey) {
    const ocupacion = ocupaciones[ocupacionKey];

    investigador.ocupacion = ocupacionKey;
    investigador.puntos_habilidad = calcularPuntos(investigador, ocupacion.getPuntosHabilidad());

    investigador.habilidades = {};

    Object.keys(habilidades).forEach((hab) => {
        investigador.habilidades[hab] = {
            class: ocupacion.getHabilidadesClase().includes(hab),
            value: isNaN(habilidades[hab]) ? calcularPuntos(investigador, habilidades[hab]) : habilidades[hab]
        }
    });

    investigador.habilidades.custom = !!ocupacion.getCustomHabilidadesClase() ? ocupacion.getCustomHabilidadesClase() : {num: 0};
    investigador.credito = ocupacion.getCredito();

    return ocupacion;
}

function getHabilidad(investigador, index) {
    return Object.keys(investigador.habilidades)[index];
}

function getHabilidadForCustom(investigador, index) {
    return !!investigador.habilidades.custom.habilidades ? Object.keys(investigador.habilidades.custom.habilidades)[index] : getHabilidad(investigador, index);
}

function printHabilidades(text, investigador, deOcupacion = true) {
    text = `Tienes ${investigador.puntos_habilidad} para gastar entre las siguiente habilidades:\n`;
    Object.keys(investigador.habilidades).forEach((hab, i) => {
        if (!deOcupacion || investigador.habilidades[hab].class) {
            text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
        }
    });
    text += '\n¿En qué habilidad deseas gastar puntos?';

    return text;
}

function printHabilidadesCustom(text, investigador) {
    if (!!investigador.habilidades.custom.habilidades) {
        text = `Tienes que escoger ${investigador.habilidades.custom.num} de entre: \n`;
        Object.keys(investigador.habilidades.custom.habilidades).forEach((hab, i) => {
            if (!investigador.habilidades[hab].class) {
                text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
            }
        });
    } else {
        text = `Tienes que escoger ${investigador.habilidades.custom.num} habilidades de entre: \n`;
        Object.keys(investigador.habilidades).forEach((hab, i) => {
            if (!investigador.habilidades[hab].class && hab != 'custom') {
                text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
            }
        });
    } 
    return text;
}

export function addInvestigador() {
    let investigador = {},
        habilidad = null;

    const addWizard = new WizardScene('add-investigador',
        (ctx) => {
            //1
            investigador.playerId = ctx.from.id;
            ctx.reply('Nuevo investigador para los años 20.\nEscoge nombre:');
            return ctx.wizard.next()
        },
        (ctx) => {
            //2
            investigador.name = ctx.message.text;
            ctx.reply(generateCaracteristicas(investigador)).then(() => {
                ctx.reply('Edad del investigador:');
                return ctx.wizard.next()
            });
        },
        (ctx) => {
            //3
            investigador.edad = ctx.message.text;

            if (isNaN(investigador.edad) || investigador.edad < 15 || investigador.edad > 88) {
                ctx.reply('Edad incorrecta. Introduce una edad entre 15 y 88:');
            } else {
                adaptarEdad(investigador);
                calcularMOV(investigador);
                calculaAtributosDerivados(investigador);

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
                adoptarOcupacion(investigador, Object.keys(ocupaciones)[ocupacionIndex-1]);

                let text = '';

                if (investigador.habilidades.custom.num > 0 ) {
                    console.log(investigador.habilidades.custom.num);
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

                investigador.habilidades[habilidad].class = true;
                investigador.habilidades.custom.num--;

                let text = `${habilidad} asignada como habilidad de ocupación. \n`;

                if (investigador.habilidades.custom.num == 0) {
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
                investigador.habilidades[habilidad].value += parseInt(puntos);
                investigador.puntos_habilidad -= parseInt(puntos);

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
                    const fueTam = investigador.caracteristicas.fue + investigador.caracteristicas.tam;

                    switch(true) {
                        case (fueTam < 65):
                            investigador.bd = -2;
                            investigador.corpulencia = -2;
                            break;
                        case (fueTam < 85):
                            investigador.bd = -1;
                            investigador.corpulencia = -1;
                            break;
                        case (fueTam < 125):
                            investigador.bd = 0;
                            investigador.corpulencia = 0;
                            break;
                        case (fueTam < 165):
                            investigador.bd = "1D4";
                            investigador.corpulencia = 1;
                            break;
                        case (fueTam < 205):
                            investigador.bd = "1D6";
                            investigador.corpulencia = 2;
                            break;
                        case (fueTam < 285):
                            investigador.bd = "2D6";
                            investigador.corpulencia = 3;
                            break;
                        case (fueTam < 365):
                            investigador.bd = "3D6";
                            investigador.corpulencia = 4;
                            break;
                        case (fueTam < 445):
                            investigador.bd = "4D6";
                            investigador.corpulencia = 5;
                            break;
                        case (fueTam < 525):
                            investigador.bd = "5D6";
                            investigador.corpulencia = 6;
                            break;
                    }

                    delete investigador.habilidades.custom;

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

    db.find( { playerId: ctx.from.id }).then((investigadores) => {
        investigadores.forEach((inv, i) => {
            text += `${i+1}: ${inv.name} (${inv.ocupacion})\n`;
        });

        ctx.reply(text);
   });
}

export function add(ctx) {
    ctx.scene.enter('add-investigador')
}