import { ARTE_ARTESANIA_CUSTOM, ARTE_ARTESANIA_CUSTOM_2, CONTABILIDAD, DESCUBRIR, MECANICA, NATURALEZA } from "../habilidades";

class Artesano {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'artesano';
    }

   getPuntosHabilidad() {
       // TODO: des o fue
       return "edu*2+des*2";
   }

   getCredito() {
       return "10-40";
   }

   getHabilidadesClase() {
       return [
            ARTE_ARTESANIA_CUSTOM,
            ARTE_ARTESANIA_CUSTOM_2,
            CONTABILIDAD,
            DESCUBRIR,
            MECANICA,
            NATURALEZA
       ];
   }

}

export default Artesano;