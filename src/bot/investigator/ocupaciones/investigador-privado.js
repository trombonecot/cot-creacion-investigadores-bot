import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, BUSCAR_LIBROS, DERECHO, DESCUBRIR, DISFRAZARSE, PSICOLOGIA } from "../habilidades";

class InvestigadorPrivado {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'investigador-privado';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           BUSCAR_LIBROS,
           DERECHO,
           DESCUBRIR,
           DISFRAZARSE,
           PSICOLOGIA
       ];
   }

}

export default InvestigadorPrivado;