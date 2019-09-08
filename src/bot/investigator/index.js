import { generateCaracteristicas, calculaAtributosDerivados } from "./caracteristicas";
import { adaptarEdad, calcularMOV } from "./edad";
import { ocupaciones } from "./ocupaciones";
import { habilidades } from "./habilidades";
import { calcularPuntos } from "./utils";

class Investigador {
    
    constructor (playerId, name) {
        this.playerId = playerId;
        this.name = name;

        generateCaracteristicas(this);
    }

    setEdad(edad) {
        this.edad = edad;
        adaptarEdad(this);
        calcularMOV(this);
        calculaAtributosDerivados(this);
    }

    setOcupacion(ocupacionName) {
        this.ocupacion = ocupaciones[ocupacionName];
        this.puntos_habilidad = calcularPuntos(this, this.ocupacion.getPuntosHabilidad());  

        this.initHabilidades();

        // TODO: more complex custom habilities (different groups)
        this.habilidades.custom = !!this.ocupacion.getCustomHabilidadesClase() ? this.ocupacion.getCustomHabilidadesClase() : { num: 0 };

    }

    initHabilidades(){
        this.habilidades = {};
        Object.keys(habilidades).forEach((hab) => {
            this.habilidades[hab] = {
                class: this.ocupacion.getHabilidadesClase().includes(hab),
                value: isNaN(habilidades[hab]) ? calcularPuntos(this, habilidades[hab]) : habilidades[hab]
            }
        });
    }








}

export default Investigador;