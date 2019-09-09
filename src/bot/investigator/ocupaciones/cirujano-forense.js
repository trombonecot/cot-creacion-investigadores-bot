import { BUSCAR_LIBROS, CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, CIENCIA_CUSTOM_3, DESCUBRIR, MEDICINA, OTRAS_LENGUAS_CUSTOM } from "../habilidades";

class CirujanoForense {

    constructor() {
        this.customHabilidades = [];
        this.name = 'cirujano-forense';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "40-60";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           CIENCIA_CUSTOM,
           CIENCIA_CUSTOM_2,
           CIENCIA_CUSTOM_3,
           DESCUBRIR,
           MEDICINA,
           OTRAS_LENGUAS_CUSTOM,
           PERSUASION
       ];
   }

}

export default CirujanoForense;