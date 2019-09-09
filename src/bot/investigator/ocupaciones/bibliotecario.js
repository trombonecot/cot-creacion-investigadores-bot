import { CONDUCIR_AUTOMOBIL, BUSCAR_LIBROS, CONTABILIDAD, LENGUA_PROPIA, OTRAS_LENGUAS_CUSTOM } from "../habilidades";

class Bibliotecario {

    constructor() {
        this.customHabilidades = [{},{},{},{}];
        this.name = 'bibliotecario';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*4";
   }

   getCredito() {
       return "9-35";
   }

   getHabilidadesClase() {
       return [
            BUSCAR_LIBROS,
            CONTABILIDAD,
            LENGUA_PROPIA,
            OTRAS_LENGUAS_CUSTOM
       ];
   }

}

export default Bibliotecario;