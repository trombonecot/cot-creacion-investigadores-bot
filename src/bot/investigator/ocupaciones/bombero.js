import { CONDUCIR_AUTOMOBIL, CONDUCIR_MAQUINARIA, ESQUIVAR, LANZAR, MECANICA, PRIMEROS_AUXILIOS, TREPAR } from "../habilidades";

class Bombero {

    constructor() {
        this.customHabilidades = [];
        this.name = 'bombero';
    }

   getPuntosHabilidad() {
       return "edu*2+fue*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
        CONDUCIR_AUTOMOBIL,
        CONDUCIR_MAQUINARIA,
        ESQUIVAR,
        LANZAR,
        MECANICA,
        PRIMEROS_AUXILIOS,
        SALTAR,
        TREPAR
       ];
   }

}

export default Bombero;