import {
    ESCUCHAR,
    ORIENTARSE,
    OTRAS_LENGUAS_CUSTOM,
    PRIMEROS_AUXILIOS,
    SALTAR,
    SEGUIR_RASTROS,
    SUPERVIVENCIA_CUSTOM,
    TREPAR } from '../habilidades';

class Alpinista {

    constructor() {
        this.customHabilidades = [];
        this.name = 'alpinista';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+des*2";
   }

   getCredito() {
       return "30-60";
   }

   getHabilidadesClase() {
       return [
            ESCUCHAR,
            ORIENTARSE,
            OTRAS_LENGUAS_CUSTOM,
            PRIMEROS_AUXILIOS,
            SALTAR,
            SEGUIR_RASTROS,
            SUPERVIVENCIA_CUSTOM,
            TREPAR
       ];
   }

}

export default Alpinista;