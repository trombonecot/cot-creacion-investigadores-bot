import { rollDice } from '../../services/dices';

export function calcularAttributosCombat(investigador) {
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
}

export function generateCaracteristicas(investigador) {
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

export function calculaAtributosDerivados(investigador) {
    investigador.cordura = investigador.caracteristicas.pod;
    investigador.magia = Math.floor(investigador.caracteristicas.pod/5);
    investigador.suerte = rollDice("3D6") * 5;

    if (investigador.edad < 20) {
        const tirada = rollDice("3D6") * 5;
        investigador.suerte = investigador.suerte < tirada ? tirada : investigador.suerte;
    }

    investigador.vida = Math.floor((investigador.caracteristicas.tam + investigador.caracteristicas.con) / 10);
}