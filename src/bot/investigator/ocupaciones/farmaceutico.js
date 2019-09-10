import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, BUSCAR_LIBROS, CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, CONTABILIDAD, OTRAS_LENGUAS_CUSTOM, PRIMEROS_AUXILIOS, PSICOLOGIA } from "../habilidades";

class Farmaceutico {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'farmaceutico';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "35-75";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           CIENCIA_CUSTOM,
           CIENCIA_CUSTOM_2,
           CONTABILIDAD,
           OTRAS_LENGUAS_CUSTOM,
           PRIMEROS_AUXILIOS,
           PSICOLOGIA
       ];
   }

}

export default Farmaceutico;