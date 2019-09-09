import { ARQUEOLOGIA, BUSCAR_LIBROS, DESCUBRIR, HISTORIA, MECANICA, ORIENTARSE, OTRAS_LENGUAS_CUSTOM, TASACION, CIENCIA_CUSTOM } from "../habilidades";

class Arqueologo {

    constructor() {
        this.customHabilidades = [{list: [ORIENTARSE, CIENCIA_CUSTOM]}];
        this.name = 'arqueologo';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*4";
   }

   getCredito() {
       return "10-40";
   }

   getHabilidadesClase() {
       return [
            ARQUEOLOGIA,
            BUSCAR_LIBROS,
            DESCUBRIR,
            HISTORIA,
            MECANICA,
            OTRAS_LENGUAS_CUSTOM,
            TASACION
       ];
   }

}

export default Arqueologo;