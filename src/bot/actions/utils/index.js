import { ocupaciones } from "../../investigator/ocupaciones";


export function getHabilidad(investigador, index) {
    return Object.keys(investigador.habilidades)[index];
}

export function getHabilidadForCustom(investigador, index) {
    return!!investigador.ocupacion.customHabilidades[0].list ? investigador.ocupacion.customHabilidades[0].list[index] : getHabilidad(investigador, index);
}

export function printHabilidades(text, investigador, deOcupacion = true) {
    text = `Tienes ${investigador.puntos_habilidad} para gastar entre las siguiente habilidades:\n`;
    
    Object.keys(investigador.habilidades).forEach((hab, i) => {
        if ((!deOcupacion || investigador.habilidades[hab].class)) {
            text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
        }
    });
    text += '\n¿En qué habilidad deseas gastar puntos?';

    return text;
}

export function printHabilidadesCustom(text, investigador) {
    const habilidadCustom = investigador.ocupacion.customHabilidades[0];

    text = `Tienes que escoger una habilidad de ocupación de entre: \n`;
    if (!!habilidadCustom.list) {
        Object.keys(habilidadCustom.list).forEach((i) => {
            const hab = habilidadCustom.list[i];
            if (!investigador.habilidades[hab].class) {
                text += `${parseInt(i)+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
            }
        });
    } else {
        Object.keys(investigador.habilidades).forEach((hab, i) => {
            if (!investigador.habilidades[hab].class) {
                text += `${i+1}: ${hab} (${investigador.habilidades[hab].value})\n`;
            }
        });
    }

    return text;
}

export function getOcupaciones() {
    let text = 'Elige una ocupacion (usa el número para indicar cual):\n',
        i = 1;

    Object.keys(ocupaciones).forEach((ocupacio) => {
        text += `${i}: ${ocupacio}\n`;
        i++;
    });

    return text;
}