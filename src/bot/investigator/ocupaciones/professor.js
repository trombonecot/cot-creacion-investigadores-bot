import { BUSCAR_LIBROS, LENGUA_PROPIA, OTRAS_LENGUAS_CUSTOM, PSICOLOGIA } from "../habilidades";

class Professor {

    constructor() {
        this.customHabilidades = [{},{},{},{}];
        this.name = 'professor';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "20-70";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           LENGUA_PROPIA,
           OTRAS_LENGUAS_CUSTOM,
           PSICOLOGIA
       ];
   }

}

export default Professor;