import { CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, ARTE_ARTESANIA_CUSTOM, MECANICA, MEDICINA, NATURALEZA } from "../habilidades";

class Misionero {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{},{}];
        this.name = 'misionero';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "0-30";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           MECANICA,
           MEDICINA,
           NATURALEZA
       ];
   }

}

export default Misionero;