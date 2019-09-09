import { ARMAS_DE_FUEGO_CUSTOM, CIENCIA_CUSTOM, ESCUCHAR, DESCUBRIR, NATURALEZA, ORIENTARSE, OTRAS_LENGUAS_CUSTOM, SUPERVIVENCIA_CUSTOM, SEGUIR_RASTROS, SIGILO } from "../habilidades";

class Cazador {

    constructor() {
        this.customHabilidades = [{list:[ESCUCHAR, DESCUBRIR]},{list:[OTRAS_LENGUAS_CUSTOM, SUPERVIVENCIA_CUSTOM]}];
        this.name = 'cazador';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "20-50";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_CUSTOM,
           CIENCIA_CUSTOM,
            NATURALEZA,
            ORIENTARSE,
            SEGUIR_RASTROS,
            SIGILO
       ];
   }

}

export default Cazador;