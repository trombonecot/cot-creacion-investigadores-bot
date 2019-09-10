import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, ESCUCHAR, PSICOLOGIA, DESCUBRIR, HISTORIA, LENGUA_PROPIA, SIGILO } from "../habilidades";

class Periodista {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'periodista';
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
           DESCUBRIR,
           ESCUCHAR,
           HISTORIA,
           LENGUA_PROPIA,
           PSICOLOGIA,
           SIGILO
       ];
   }

}

export default Periodista;