import { ARTE_ARTESANIA_CUSTOM, DISFRAZARSE, CHARLATENERIA, ENCANTO, HISTORIA, PSICOLOGIA, INTIMIDAR, PERSUASION, COMBATIR_CUSTOM } from "../habilidades";

class ActorTeatro {

    constructor () {
        this.customHabilidades = [{ list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]
            },{  list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION] }, 
            {}
        ];
        this.name = 'actor-teatro';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "9-40";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           COMBATIR_CUSTOM,
           DISFRAZARSE,
           HISTORIA,
           PSICOLOGIA
       ]
   }
}

export default ActorTeatro;