import { INTIMIDAR, PERSUASION, BUSCAR_LIBROS, DERECHO, ESCUCHAR, HISTORIA, LENGUA_PROPIA, PSICOLOGIA } from "../habilidades";

class Juez {

    constructor() {
        this.customHabilidades = [];
        this.name = 'juez';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "50-80";
   }

   getHabilidadesClase() {
       return [
        BUSCAR_LIBROS,
        DERECHO,
        ESCUCHAR,
        HISTORIA,
        INTIMIDAR,
        LENGUA_PROPIA,
        PERSUASION,
        PSICOLOGIA
       ];
   }

}

export default Juez;