import { COMBATIR_PELEA, DESCUBRIR, ESQUIVAR, INTIMIDAR } from "../habilidades";

class Boxeador {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'boxeador';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-60";
   }

   getHabilidadesClase() {
       return [
           COMBATIR_PELEA,
           DESCUBRIR,
           ESQUIVAR,
           INTIMIDAR,
           SALTAR
       ];
   }

}

export default Boxeador;