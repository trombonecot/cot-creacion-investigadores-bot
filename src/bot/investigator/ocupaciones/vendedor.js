import { CONDUCIR_AUTOMOBIL, CONTABILIDAD, ESCUCHAR, PSICOLOGIA, SIGILO, JUEGOS_DE_MANOS, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Vendedor {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];;
        this.name = 'vendedor';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "9-40";
   }

   getHabilidadesClase() {
       return [
           CONDUCIR_AUTOMOBIL,
           CONTABILIDAD,
           ESCUCHAR,
           PSICOLOGIA,
           JUEGOS_DE_MANOS
       ];
   }

}

export default Vendedor;