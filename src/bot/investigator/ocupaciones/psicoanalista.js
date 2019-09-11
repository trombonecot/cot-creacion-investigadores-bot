import { BUSCAR_LIBROS, CONTABILIDAD, ESCUCHAR, PERSUASION, PSICOANALISIS, PSICOLOGIA } from "../habilidades";

class Psicoanalista {

    constructor() {
        this.customHabilidades = [{},{}];
        this.name = 'psicoanalista';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "10-40";
   }

   getHabilidadesClase() {
       return [
          BUSCAR_LIBROS,
          CONTABILIDAD,
          ESCUCHAR,
          PERSUASION,
          PSICOANALISIS,
          PSICOLOGIA
       ];
   }

}

export default Psicoanalista;