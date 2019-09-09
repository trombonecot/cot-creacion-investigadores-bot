import { COMBATIR_CUSTOM, ARMAS_DE_FUEGO_CUSTOM, CONDUCIR_AUTOMOBIL, DERECHO, ELECTRICIDAD, PSICOLOGIA, SEGUIR_RASTROS, SIGILO, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class CazaRecompensas {

    constructor() {
        this.customHabilidades = [{list:[COMBATIR_CUSTOM, ARMAS_DE_FUEGO_CUSTOM]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'cazarecompensas';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
           CONDUCIR_AUTOMOBIL,
           DERECHO,
           ELECTRICIDAD,
           PSICOLOGIA,
           SEGUIR_RASTROS,
           SIGILO
       ];
   }

}

export default CazaRecompensas;