import { ARTE_ARTESANIA_CUSTOM, CONDUCIR_AUTOMOBIL, DISFRAZARSE, PSICOLOGIA } from "../habilidades";


class ActorCine {

    constructor () {
        this.customHabilidades = [{ list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]
            },{  list: [CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION] }, 
            {},
            {}
        ];
        this.name = 'actor-cine';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "20-90";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           CONDUCIR_AUTOMOBIL,
           DISFRAZARSE,
           PSICOLOGIA
       ]
   }
}

export default ActorCine;