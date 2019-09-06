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

   getHabilidades() {
       return [
           DESCUBRIR,
           ESQUIVAR,
           LANZAR,
           NADAR,
           SALTAR,
           TREPAR,
           'custom',
           'custom'
       ]
   }
}

export default Acrobata;