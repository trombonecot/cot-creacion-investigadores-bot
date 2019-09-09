import { BUSCAR_LIBROS, DESCUBRIR, LENGUA_PROPIA, OTRAS_LENGUAS_CUSTOM, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Cientifico {

    constructor() {
        this.customHabilidades = [{},{},{},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'cientifico';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "9-50";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           DESCUBRIR,
           LENGUA_PROPIA,
           OTRAS_LENGUAS_CUSTOM
       ];
   }

}

export default Cientifico;