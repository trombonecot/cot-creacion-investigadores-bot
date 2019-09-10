import { ARMAS_DE_FUEGO_FUSIL_ESCOPETA, HISTORIA, NATURALEZA, ORIENTARSE, OTRAS_LENGUAS_CUSTOM, SALTAR, SUPERVIVENCIA_CUSTOM, TREPAR, NADAR } from "../habilidades";

class Explorador {

    constructor() {
        this.customHabilidades = [{list: [TREPAR, NADAR]}];
        this.name = 'explorador';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "55-80";
   }

   getHabilidadesClase() {
       return [
            ARMAS_DE_FUEGO_FUSIL_ESCOPETA,
            HISTORIA,
            NATURALEZA,
            ORIENTARSE,
            OTRAS_LENGUAS_CUSTOM,
            SALTAR,
            SUPERVIVENCIA_CUSTOM
       ];
   }

}

export default Explorador;