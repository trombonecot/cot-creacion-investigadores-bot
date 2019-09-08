import { rollDice } from '../../services/dices';

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