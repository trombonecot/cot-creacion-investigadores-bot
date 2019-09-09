import { CIENCIA_CUSTOM, CIENCIA_CUSTOM_2, CIENCIAS_OCULTAS,CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, CONDUCIR_AUTOMOBIL, CONTABILIDAD, HISTORIA, PSICOLOGIA } from "../habilidades";

class Enterrador {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'enterrador';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "20-40";
   }

   getHabilidadesClase() {
       return [
        CIENCIA_CUSTOM,
        CIENCIA_CUSTOM_2,
        CIENCIAS_OCULTAS,
        CONDUCIR_AUTOMOBIL,
        CONTABILIDAD,
        HISTORIA,
        PSICOLOGIA
       ];
   }

}

export default Enterrador;