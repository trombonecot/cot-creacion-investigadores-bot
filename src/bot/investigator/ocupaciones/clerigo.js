import { BUSCAR_LIBROS, CONTABILIDAD, ESCUCHAR, HISTORIA, OTRAS_LENGUAS_CUSTOM, PSICOLOGIA, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Clerigo {

    constructor() {
        this.customHabilidades = [{},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'clerigo';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "9-60";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           CONTABILIDAD,
           ESCUCHAR,
           HISTORIA,
           OTRAS_LENGUAS_CUSTOM,
           PSICOLOGIA
       ];
   }

}

export default Clerigo;