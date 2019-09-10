import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, COMBATIR_PELEA, ESCUCHAR, ESQUIVAR, PRIMEROS_AUXILIOS, PSICOLOGIA, SIGILO } from "../habilidades";

class Loquero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'loquero';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "8-20";
   }

   getHabilidadesClase() {
       return [
           COMBATIR_PELEA,
           ESCUCHAR,
           ESQUIVAR,
           PRIMEROS_AUXILIOS,
           PSICOLOGIA,
           SIGILO
       ];
   }

}

export default Loquero;