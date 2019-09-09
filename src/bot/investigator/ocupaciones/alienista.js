import { 
    CIENCIA_CUSTOM,
    DERECHO,
    ESCUCHAR,
    MEDICINA,
    OTRAS_LENGUAS_CUSTOM,
    PSICOANALISIS,
    PSICOLOGIA} from '../habilidades';

class Alienista {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'alienista';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "10-60";
   }

   getHabilidadesClase() {
       return [
           CIENCIA_CUSTOM,
           DERECHO,
           ESCUCHAR,
           MEDICINA,
           OTRAS_LENGUAS_CUSTOM,
           PSICOANALISIS,
           PSICOLOGIA
       ];
   }

}

export default Alienista;