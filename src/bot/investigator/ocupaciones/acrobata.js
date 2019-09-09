import { 
    DESCUBRIR,
    ESQUIVAR,
    LANZAR,
    NADAR,
    SALTAR,
    TREPAR } from '../habilidades';

class Acrobata {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'acrobata';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-20";
   }

   getHabilidadesClase() {
       return [
           DESCUBRIR,
           ESQUIVAR,
           LANZAR,
           NADAR,
           SALTAR,
           TREPAR
       ];
   }

}

export default Acrobata;