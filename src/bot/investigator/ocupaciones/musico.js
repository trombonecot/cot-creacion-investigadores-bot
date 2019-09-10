import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, ESCUCHAR, PSICOLOGIA } from "../habilidades";

class Musico {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{},{},{},{}];
        this.name = 'musico';
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
           ESCUCHAR,
           PSICOLOGIA
       ];
   }

}

export default Musico;