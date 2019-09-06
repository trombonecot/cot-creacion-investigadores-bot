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
           CUSTOM,
           CUSTOM
       ]
   }
}

export default Acrobata;