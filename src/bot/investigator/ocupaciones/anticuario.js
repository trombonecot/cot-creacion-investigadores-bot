import { ARTE_ARTESANIA_CUSTOM, BUSCAR_LIBROS, DESCUBRIR, HISTORIA, OTRAS_LENGUAS_CUSTOM, TASACION, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";


class Anticuario {

    constructor() {
        this.customHabilidades = [{}, {list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'anticuario';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*4";
   }

   getCredito() {
       return "30-70";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            BUSCAR_LIBROS,
            DESCUBRIR,
            HISTORIA,
            OTRAS_LENGUAS_CUSTOM,
            TASACION
       ];
   }

}

export default Anticuario;