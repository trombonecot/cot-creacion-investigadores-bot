import { ARMAS_DE_FUEGO_ARMA_CORTA, COMBATIR_PELEA, ESQUIVAR, SIGILO, SUPERVIVENCIA_CUSTOM, TREPAR, NADAR, MECANICA, OTRAS_LENGUAS_CUSTOM, PRIMEROS_AUXILIOS } from "../habilidades";

class Sindicalista {

    constructor() {
        this.customHabilidades = [{list:[MECANICA, OTRAS_LENGUAS_CUSTOM, PRIMEROS_AUXILIOS]},{list:[MECANICA, OTRAS_LENGUAS_CUSTOM, PRIMEROS_AUXILIOS]}];
        this.name = 'sindicalista';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_ARMA_CORTA,
           COMBATIR_PELEA,
           ESQUIVAR,
           SIGILO,
           SUPERVIVENCIA_CUSTOM,
           TREPAR,
           NADAR
       ];
   }

}

export default Sindicalista;