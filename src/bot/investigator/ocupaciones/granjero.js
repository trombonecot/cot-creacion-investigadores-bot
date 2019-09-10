import {CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, CONDUCIR_AUTOMOBIL, CONDUCIR_MAQUINARIA, MECANICA, NATURALEZA, SEGUIR_RASTROS } from "../habilidades";

class Granjero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'grangero';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-20";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           CONDUCIR_AUTOMOBIL,
           CONDUCIR_MAQUINARIA,
           MECANICA,
           NATURALEZA,
           SEGUIR_RASTROS
       ];
   }

}

export default Granjero;