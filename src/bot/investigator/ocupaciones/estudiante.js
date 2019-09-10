import { BUSCAR_LIBROS, LENGUA_PROPIA, OTRAS_LENGUAS_CUSTOM } from "../habilidades";

class Estudiante {

    constructor() {
        this.customHabilidades = [{},{},{},{},{}];
        this.name = 'estudiante';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "5-10";
   }

   getHabilidadesClase() {
       return [
            BUSCAR_LIBROS,
            LENGUA_PROPIA,
            OTRAS_LENGUAS_CUSTOM,
       ];
   }

}

export default Estudiante;