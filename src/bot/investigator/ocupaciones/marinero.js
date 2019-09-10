import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, DESCUBRIR, MECANICA, NADAR, NATURALEZA, ORIENTARSE, PILOTAR_CUSTOM, PRIMEROS_AUXILIOS } from "../habilidades";

class Marinero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'marinero';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "20-40";
   }

   getHabilidadesClase() {
       return [
           DESCUBRIR,
           MECANICA,
           NADAR,
           NATURALEZA,
           ORIENTARSE,
           PILOTAR_CUSTOM,
           PRIMEROS_AUXILIOS
       ];
   }

}

export default Marinero;