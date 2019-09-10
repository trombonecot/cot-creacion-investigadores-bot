import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARMAS_DE_FUEGO_ARMA_CORTA, ARMAS_DE_FUEGO_FUSIL_ESCOPETA, ARMAS_DE_FUEGO_CUSTOM, CONTABILIDAD, ORIENTARSE, PSICOLOGIA, SUPERVIVENCIA_CUSTOM,} from "../habilidades";

class Militar {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'militar';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "20-70";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_ARMA_CORTA,
           ARMAS_DE_FUEGO_FUSIL_ESCOPETA,
           ARMAS_DE_FUEGO_CUSTOM,
           CONTABILIDAD,
           ORIENTARSE,
           PSICOLOGIA,
           SUPERVIVENCIA_CUSTOM
       ];
   }

}

export default Militar;