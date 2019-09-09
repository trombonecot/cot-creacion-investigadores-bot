import { COMBATIR_PELEA, CONTABILIDAD, DESCUBRIR, ESCUCHAR, PSICOLOGIA } from "../habilidades";

class Barman {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'barman';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+apa*2";
   }

   getCredito() {
       return "8-25";
   }

   getHabilidadesClase() {
       return [
            COMBATIR_PELEA,
            CONTABILIDAD,
            DESCUBRIR,
            ESCUCHAR,
            PSICOLOGIA
       ];
   }

}

export default Barman;