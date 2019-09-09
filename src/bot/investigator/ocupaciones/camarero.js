import { ARTE_ARTESANIA_CUSTOM, CONTABILIDAD, ESQUIVAR, ESCUCHAR, PSICOLOGIA, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Camarero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'camarero';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            CONTABILIDAD,
            ESQUIVAR,
            ESCUCHAR,
            PSICOLOGIA
       ];
   }

}

export default Camarero;