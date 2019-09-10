import { ARMAS_DE_FUEGO_ARMA_CORTA, ARTE_ARTESANIA_CUSTOM, DISFRAZARSE, ESCUCHAR, JUEGOS_DE_MANOS, OTRAS_LENGUAS_CUSTOM, PSICOLOGIA, SIGILO, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Espia {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'espia';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "20-60";
   }

   getHabilidadesClase() {
       return [
            ARMAS_DE_FUEGO_ARMA_CORTA,
            DISFRAZARSE,
            ESCUCHAR,
            JUEGOS_DE_MANOS,
            OTRAS_LENGUAS_CUSTOM,
            PSICOLOGIA,
            SIGILO
       ];
   }

}

export default Espia;