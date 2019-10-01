import { DESCUBRIR, BUCEAR, CIENCIA_CUSTOM, MECANICA, PILOTAR_CUSTOM, PRIMEROS_AUXILIOS, NADAR } from "../habilidades";

class Buzo {

    constructor() {
        this.customHabilidades = [{}];
        this.name = 'buzo';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
           BUCEAR,
           CIENCIA_CUSTOM,
           DESCUBRIR,
           MECANICA,
           NADAR,
           PILOTAR_CUSTOM,
           PRIMEROS_AUXILIOS
       ];
   }

}

export default Buzo;