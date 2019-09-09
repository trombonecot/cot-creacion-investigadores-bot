import { COMBATIR_PELEA, ELECTRICIDAD, ESCUCHAR, MECANICA, PRIMEROS_AUXILIOS, PSICOLOGIA, SIGILO, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Camillero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'camillero';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "6-15";
   }

   getHabilidadesClase() {
       return [
           COMBATIR_PELEA,
           ELECTRICIDAD,
           ESCUCHAR,
           MECANICA,
           PRIMEROS_AUXILIOS,
           PSICOLOGIA,
           SIGILO
       ];
   }

}

export default Camillero;