
export function calcularPuntos(investigador, formula) {
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