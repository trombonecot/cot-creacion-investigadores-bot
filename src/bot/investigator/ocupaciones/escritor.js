import { ARTE_ARTESANIA_CUSTOM, BUSCAR_LIBROS, HISTORIA, LENGUA_PROPIA, NATURALEZA, CIENCIAS_OCULTAS, OTRAS_LENGUAS_CUSTOM, PSICOLOGIA } from "../habilidades";

class Escritor {

    constructor() {
        this.customHabilidades = [{},{list: [NATURALEZA, CIENCIAS_OCULTAS]}];
        this.name = 'escritor';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            BUSCAR_LIBROS,
            HISTORIA,
            LENGUA_PROPIA,
            OTRAS_LENGUAS_CUSTOM,
            PSICOLOGIA
       ];
   }

}

export default Escritor;