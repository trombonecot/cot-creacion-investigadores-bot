import { CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, MEDICINA, OTRAS_LENGUAS_CUSTOM, PRIMEROS_AUXILIOS, PSICOLOGIA } from "../habilidades";

class Medico {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'medico';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "30-80";
   }

   getHabilidadesClase() {
       return [
           CIENCIA_CUSTOM,
           CIENCIA_CUSTOM_2,
           MEDICINA,
           OTRAS_LENGUAS_CUSTOM,
           PRIMEROS_AUXILIOS,
           PSICOLOGIA
       ];
   }

}

export default Medico;