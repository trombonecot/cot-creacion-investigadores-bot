import { ARMAS_DE_FUEGO_FUSIL_ESCOPETA, ARTE_ARTESANIA_CUSTOM, EQUITACION, HISTORIA, ORIENTARSE, OTRAS_LENGUAS_CUSTOM,CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Aristocrata {

    constructor() {
        this.customHabilidades = [{}, {list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}, {list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'aristocatra';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+apa*2";
   }

   getCredito() {
       return "40-90";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_FUSIL_ESCOPETA,
           ARTE_ARTESANIA_CUSTOM,
           EQUITACION,
           HISTORIA,
           ORIENTARSE,
           OTRAS_LENGUAS_CUSTOM
       ];
   }

}

export default Aristocrata;
