import { ARMAS_DE_FUEGO_CUSTOM, CONDUCIR_AUTOMOBIL, COMBATIR_PELEA, DERECHO, DESCUBRIR, SIGILO , PERSUASION} from "../habilidades";

class AgenteFederal {

    constructor () {
        this.customHabilidades = [{}];
        this.name = 'agente-federal';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "20-40";
   }

   getHabilidadesClase() {
       return [
           ARMAS_DE_FUEGO_CUSTOM,
           CONDUCIR_AUTOMOBIL,
           COMBATIR_PELEA,
           DERECHO,
           DESCUBRIR,
           PERSUASION,
           SIGILO
       ]
   }
}

export default AgenteFederal;