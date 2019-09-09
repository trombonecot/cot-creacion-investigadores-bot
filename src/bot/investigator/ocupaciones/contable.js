import { BUSCAR_LIBROS, CONTABILIDAD, DERECHO, DESCUBRIR, ESCUCHAR } from "../habilidades";

class Contable {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'contable';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "30-70";
   }

   getHabilidadesClase() {
       return [
           BUSCAR_LIBROS,
           CONTABILIDAD,
           DERECHO,
           DESCUBRIR,
           ESCUCHAR,
           PERSUASION
       ];
   }

}

export default Contable;