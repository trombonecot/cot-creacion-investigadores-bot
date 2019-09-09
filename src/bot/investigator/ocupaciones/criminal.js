import { ARMAS_DE_FUEGO_ARMA_CORTA, CONDUCIR_AUTOMOBIL, DESCUBRIR, ESCUCHAR, JUEGOS_DE_MANOS, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Criminal {

    constructor() {
        this.customHabilidades = [{},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'criminal';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "20-60";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_ARMA_CORTA,
           CONDUCIR_AUTOMOBIL,
           DESCUBRIR,
           ESCUCHAR,
           JUEGOS_DE_MANOS
       ];
   }

}

export default Criminal;