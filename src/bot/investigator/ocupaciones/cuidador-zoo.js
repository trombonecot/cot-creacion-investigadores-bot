import { ARTE_ARTESANIA_CUSTOM, CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, CONTABILIDAD, ESQUIVAR, MEDICINA, NATURALEZA, PRIMEROS_AUXILIOS } from "../habilidades";

class CuidadorZoo {

    constructor() {
        this.customHabilidades = [];
        this.name = 'cuidador-zoo';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "9-40";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           CIENCIA_CUSTOM,
           CIENCIA_CUSTOM_2,
           CONTABILIDAD,
           ESQUIVAR,
           MEDICINA,
           NATURALEZA,
           PRIMEROS_AUXILIOS
       ];
   }

}

export default CuidadorZoo;