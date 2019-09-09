import { ARTE_ARTESANIA_CUSTOM, DESCUBRIR, HISTORIA, NATURALEZA, OTRAS_LENGUAS_CUSTOM, PSICOLOGIA, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Artista {

    constructor() {
        this.customHabilidades = [{list: [HISTORIA, NATURALEZA]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{},{}];
        this.name = 'artista';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-50";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            DESCUBRIR,
            OTRAS_LENGUAS_CUSTOM,
            PSICOLOGIA,
       ];
   }

}

export default Artista;