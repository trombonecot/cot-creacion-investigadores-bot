import { CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, DESCUBRIR, ESCUCHAR, MEDICINA, PRIMEROS_AUXILIOS, PSICOLOGIA, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Enfermero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'enfermero';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
        CIENCIA_CUSTOM,
        CIENCIA_CUSTOM_2,
        DESCUBRIR,
        ESCUCHAR,
        MEDICINA,
        PRIMEROS_AUXILIOS,
        PSICOLOGIA
       ];
   }

}

export default Enfermero;