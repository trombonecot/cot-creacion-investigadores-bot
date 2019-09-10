import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARMAS_DE_FUEGO_FUSIL_ESCOPETA, COMBATIR_PELEA, CONDUCIR_AUTOMOBIL, PSICOLOGIA } from "../habilidades";

class Gangster {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{},{}];
        this.name = 'gangster';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-20";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_FUSIL_ESCOPETA,
           COMBATIR_PELEA,
           CONDUCIR_AUTOMOBIL,
           PSICOLOGIA
       ];
   }

}

export default Gangster;