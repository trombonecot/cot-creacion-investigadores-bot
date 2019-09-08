import { 
    DESCUBRIR,
    ESQUIVAR,
    LANZAR,
    NADAR,
    SALTAR,
    TREPAR } from '../habilidades';

class Acrobata {

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

   getCustomHabilidadesClase() {
       return {
           num: 2
       };
   }
}

export default Acrobata;