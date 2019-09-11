import { ARTE_ARTESANIA_CUSTOM, CERRAJERIA, JUEGOS_DE_MANOS, ESCUCHAR, ORIENTARSE, SALTAR, SIGILO, TREPAR } from "../habilidades";

class Vagabundo {

    constructor() {
        this.customHabilidades = [{},{list:[CERRAJERIA, JUEGOS_DE_MANOS]}];
        this.name = 'vagabundo';
    }

   getPuntosHabilidad() {
       return "edu*2+des*2";
   }

   getCredito() {
       return "0-5";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           ESCUCHAR,
           ORIENTARSE,
           SALTAR,
           SIGILO,
           TREPAR
       ];
   }

}

export default Vagabundo;