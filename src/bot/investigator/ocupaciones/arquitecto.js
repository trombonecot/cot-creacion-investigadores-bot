import { ARTE_ARTESANIA_CUSTOM, CIENCIA_CUSTOM, CONTABILIDAD, DERECHO, BUSCAR_LIBROS, LENGUA_PROPIA, PERSUASION, PSICOLOGIA } from "../habilidades";

class Arquitecto {

    constructor() {
        this.customHabilidades = [];
        this.name = 'arquitecto';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*4";
   }

   getCredito() {
       return "30-70";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            CIENCIA_CUSTOM,
            CONTABILIDAD,
            DERECHO,
            BUSCAR_LIBROS,
            LENGUA_PROPIA,
            PERSUASION,
            PSICOLOGIA
       ];
   }

}

export default Arquitecto;