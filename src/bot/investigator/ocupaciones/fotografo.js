import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, CIENCIA_CUSTOM, PSICOLOGIA, SIGILO } from "../habilidades";

class Fotografo {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{},{}];
        this.name = 'fotografo';
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
           CIENCIA_CUSTOM,
           PSICOLOGIA,
           SIGILO
       ];
   }

}

export default Fotografo;