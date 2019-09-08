export function calcularMOV(investigador) {
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