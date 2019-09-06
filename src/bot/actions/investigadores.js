import WizardScene from 'telegraf/scenes/wizard';
import Markup from 'telegraf/markup';
import db from '../../bd';
import { rollDice } from '../dices';
import { ocupaciones } from '../ocupaciones';
import { habilidades } from '../habilidades';

function generateCaracteristicas(investigador) {
    const basicHab = ['fue', 'con', 'des', 'apa', 'pod'],
    extendedHab = ['tam', 'int', 'edu'];

    investigador.caracteristicas = {};

    let text = 'Estas són las características aleatorias:\n';

    basicHab.forEach(hab => {
        investigador.caracteristicas[hab] = 5 * rollDice("3D6");
        text += `${hab.toUpperCase()}: ${investigador.caracteristicas[hab]}\n`;
    });

    extendedHab.forEach(hab => {
        investigador.caracteristicas[hab] = 5 * (rollDice("2D6")+6);
        text += `${hab.toUpperCase()}: ${investigador.caracteristicas[hab]}\n`;
    });

    return text;
}

function mejorarEDU(investigador) {
    const tirada = rollDice("1D100");
    if (tirada > investigador.caracteristicas.edu) {
        investigador.caracteristicas.edu += rollDice("1D10");
    }
}

function adaptarEdad(investigador) {
    switch(true) {
        case(investigador.edad < 20):
            investigador.caracteristicas.fue -= 5;
            investigador.caracteristicas.tam -= 5;
            investigador.caracteristicas.edu -= 5;
            break;
        case(investigador.edad < 40):
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 60):
            investigador.caracteristicas.fue -= 3;
            investigador.caracteristicas.con -= 3;
            investigador.caracteristicas.des -= 3;
            investigador.caracteristicas.apa -= 10;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 70):
            investigador.caracteristicas.fue -= 6;
            investigador.caracteristicas.con -= 6;
            investigador.caracteristicas.des -= 6;
            investigador.caracteristicas.apa -= 15;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 80):
            investigador.caracteristicas.fue -= 12;
            investigador.caracteristicas.con -= 12;
            investigador.caracteristicas.des -= 12;
            investigador.caracteristicas.apa -= 20;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 90):
            investigador.caracteristicas.fue -= 25;
            investigador.caracteristicas.con -= 25;
            investigador.caracteristicas.des -= 25;
            investigador.caracteristicas.apa -= 20;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
    }
}

function calcularMOV(investigador) {
    if (investigador.caracteristicas.fue < investigador.caracteristicas.tam && investigador.caracteristicas.des < investigador.caracteristicas.tam ) {
        investigador.caracteristicas.mov = 7;
    } else if (investigador.caracteristicas.fue > investigador.caracteristicas.tam || investigador.caracteristicas.des > investigador.caracteristicas.tam ) {
        investigador.caracteristicas.mov = 8;
    } else if (investigador.caracteristicas.fue > investigador.caracteristicas.tam && investigador.caracteristicas.des > investigador.caracteristicas.tam ) {
        investigador.caracteristicas.mov = 9;
    }

    switch(true) {
        case(investigador.edad > 80):
            investigador.caracteristicas.mov -= 5;
            break;
        case(investigador.edad > 70):
            investigador.caracteristicas.mov -= 4;
            break;
        case(investigador.edad > 60):
            investigador.caracteristicas.mov -= 3;
            break;
        case(investigador.edad > 50):
            investigador.caracteristicas.mov -= 2;
            break;
        case(investigador.edad > 40):
            investigador.caracteristicas.mov -= 1;
            break;
    }
}

function calculaAtributosDerivados(investigador) {
    investigador.cordura = investigador.caracteristicas.pod;
    investigador.magia = Math.floor(investigador.caracteristicas.pod/5);
    investigador.suerte = rollDice("3D6") * 5;

    if (investigador.edad < 20) {
        const tirada = rollDice("3D6") * 5;
        investigador.suerte = investigador.suerte < tirada ? tirada : investigador.suerte;
    }

    investigador.vida = Math.floor((investigador.caracteristicas.tam + investigador.caracteristicas.con) / 10);
}

function investigadorToString(text, obj) {
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
            text = investigadorToString(text, obj[key]);
        } else {
            text += key + ' : ' + obj[key] + '\n';
        }
    });

    return text;
}

function getOcupaciones() {
    let text = 'Elige una ocupacion (usa el número para indicar cual):\n',
        i = 1;

    Object.keys(ocupaciones).forEach((ocupacio) => {
        text += `${i}: ${ocupacio}\n`;
        i++;
    });

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
            class: ocupacion.getHabilidades().includes(hab),
            value: isNaN(habilidades[hab]) ? calcularPuntos(investigador, habilidades[hab]) : habilidades[hab]
        }
    });
}

function getHabilidad(investigador, index) {
    return Object.keys(investigador.habilidades)[index];
}


export function addInvestigador() {
    let investigador = {},
        habilidad = null;

    const addWizard = new WizardScene('add-investigador',
        (ctx) => {
            investigador.playerId = ctx.from.id;
            ctx.reply('Nuevo investigador para los años 20.\nEscoge nombre:');
            return ctx.wizard.next()
        },
        (ctx) => {
            investigador.name = ctx.message.text;
            ctx.reply(generateCaracteristicas(investigador)).then(() => {
                ctx.reply('Edad del investigador:');
                return ctx.wizard.next()
            });
        },
        (ctx) => {
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
            const ocupacionIndex = ctx.message.text;

            if (isNaN(ocupacionIndex) || ocupacionIndex > Object.keys(ocupaciones).length) {
                ctx.reply('Ocupación incorrecta. Elige una:')
            } else {
                adoptarOcupacion(investigador, Object.keys(ocupaciones)[ocupacionIndex-1]);

                let text = `Tienes ${investigador.puntos_habilidad} para gaster entre las siguiente habilidades:\n`;
                Object.keys(investigador.habilidades).forEach((hab, i) => {
                    if (investigador.habilidades[hab].class) {
                        text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
                    }
                });
                text += '\n¿En qué habilidad deseas gastar puntos?'
                
                ctx.reply(text);
                return ctx.wizard.next()
            }
        },
        (ctx) => {
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
            let puntos = ctx.message.text;

            if (isNaN(puntos) || puntos < 0 || puntos > investigador.puntos_habilidad || (investigador.habilidades[habilidad].value + parseInt(puntos) > 99)){
                console.log(puntos);
                console.log(investigador.habilidades[habilidad].value + puntos);
                ctx.reply('Una habilidad sólo puede llegar a 99 puntos.');
            } else {
                investigador.habilidades[habilidad].value += parseInt(puntos);
                investigador.puntos_habilidad -= parseInt(puntos);

                if (investigador.puntos_habilidad > 0) {
                    ctx.reply('Escoge una habilidad indicando el número de habilidad:');
                    return ctx.wizard.back();
                } else {
                    ctx.reply('Todos los puntos agotados!:')
                    return ctx.wizard.next()
                }
            }
        },
    );

    return addWizard;
}

export function add(ctx) {
    ctx.scene.enter('add-investigador')
}