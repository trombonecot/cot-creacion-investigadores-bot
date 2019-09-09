import { COMBATIR_PELEA, EQUITACION, LANZAR, TREPAR } from "../habilidades";

class Atleta {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'atleta';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-70";
   }

   getHabilidadesClase() {
       return [
            COMBATIR_PELEA,
            EQUITACION,
            LANZAR,
            NADAR,
            SALTAR,
            TREPAR
       ];
   }

}

export default Atleta;