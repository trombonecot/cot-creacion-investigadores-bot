
export function printInvestigador(investigador) {
    let text = `Nombre: ${investigador.name}\n`;
    text += `Ocupación: ${investigador.ocupacion.getName()}\n`;
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