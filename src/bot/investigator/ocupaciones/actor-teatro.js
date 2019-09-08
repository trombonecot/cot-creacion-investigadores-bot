import { ARTE_ARTESANIA_CUSTOM, DISFRAZARSE, CHARLATENERIA, ENCANTO, HISTORIA, PSICOLOGIA } from "../habilidades";

class ActorTeatro {

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "9-40";
   }

   getHabilidades() {
       // TODO: ESCOLLIR ENTRE CHARLATENERIA I.,...
       return [
           ARTE_ARTESANIA_CUSTOM,
           COMBATIR,
           DISFRAZARSE,
           CHARLATENERIA,
           ENCANTO,
           HISTORIA,
           PSICOLOGIA,
           'custom'
       ]
   }
}

export default ActorTeatro;