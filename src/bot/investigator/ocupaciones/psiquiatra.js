import { ESCUCHAR, PERSUASION, PSICOANALISIS, PSICOLOGIA, CIENCIA_CUSTOM_2, CIENCIA_CUSTOM, DERECHO, MEDICINA, OTRAS_LENGUAS_CUSTOM } from "../habilidades";

class Psiquiatra {

    constructor() {
        this.customHabilidades = [];
        this.name = 'psiquiatra';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "30-80";
   }

   getHabilidadesClase() {
       return [
            CIENCIA_CUSTOM,
            CIENCIA_CUSTOM_2,
            DERECHO,
            ESCUCHAR,
            MEDICINA,
            OTRAS_LENGUAS_CUSTOM,
            PERSUASION,
            PSICOANALISIS,
            PSICOLOGIA
       ];
   }

}

export default Psiquiatra;