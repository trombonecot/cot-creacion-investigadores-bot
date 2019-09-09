import { CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, CIENCIA_CUSTOM_3, DESCUBRIR, ELECTRICIDAD, BUSCAR_LIBROS, OTRAS_LENGUAS_CUSTOM } from "../habilidades";

class AyudanteLaboratorio {

    constructor() {
        this.customHabilidades = [{}];
        this.name = 'ayudante-laboratorio';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*4";
   }

   getCredito() {
       return "10-30";
   }

   getHabilidadesClase() {
       return [
           CIENCIA_CUSTOM,
           CIENCIA_CUSTOM_2,
           CIENCIA_CUSTOM_3,
           DESCUBRIR,
           ELECTRICIDAD,
           BUSCAR_LIBROS,
           OTRAS_LENGUAS_CUSTOM
       ];
   }

}

export default AyudanteLaboratorio;