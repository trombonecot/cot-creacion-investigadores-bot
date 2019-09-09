import { ocupaciones } from "./ocupaciones";
import { habilidades } from "./habilidades";
import { calcularPuntos } from "./utils";

class Investigador {
    
    constructor (playerId, name) {
        this.playerId = playerId;
        this.name = name;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setOcupacion(ocupacionName) {
        this.ocupacion = new ocupaciones[ocupacionName];
        console.log(this.ocupacion);
        this.puntos_habilidad = calcularPuntos(this, this.ocupacion.getPuntosHabilidad());  

        this.initHabilidades();
    }

    setHabilidadOcupacion(habilidad) {
        this.habilidades[habilidad].class = true;
        this.ocupacion.customHabilidades.shift();
    }

    setPuntosHabilidad(habilidad, puntos) {
        this.habilidades[habilidad].value += parseInt(puntos);
        this.puntos_habilidad -= parseInt(puntos);
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