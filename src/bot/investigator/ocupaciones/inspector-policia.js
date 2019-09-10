import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARMAS_DE_FUEGO_ARMA_CORTA, DISFRAZARSE, DERECHO, DESCUBRIR, ESCUCHAR, PSICOLOGIA } from "../habilidades";

class InspectorPolicia {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'inspector-policia';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "20-50";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_ARMA_CORTA,
           DISFRAZARSE,
           DERECHO,
           DESCUBRIR,
           ESCUCHAR,
           PSICOLOGIA
       ];
   }

}

export default InspectorPolicia;