import { CONDUCIR_AUTOMOBIL, CONTABILIDAD, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ESCUCHAR, MECANICA, ORIENTARSE, PSICOLOGIA } from "../habilidades";

class Conductor {

    constructor() {
        this.customHabilidades = [{},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'conductor';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-20";
   }

   getHabilidadesClase() {
       return [
           CONDUCIR_AUTOMOBIL,
           CONTABILIDAD,
           ESCUCHAR,
           MECANICA,
           ORIENTARSE,
           PSICOLOGIA
       ];
   }

}

export default Conductor;