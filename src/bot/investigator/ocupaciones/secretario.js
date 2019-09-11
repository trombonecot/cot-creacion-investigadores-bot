import { ARTE_ARTESANIA_CUSTOM, BUSCAR_LIBROS,CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION, LENGUA_PROPIA, PSICOLOGIA } from "../habilidades";

class Secretario {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]},{}];
        this.name = 'secretario';
    }

   getPuntosHabilidad() {
       return "edu*2+apa*2";
   }

   getCredito() {
       return "9-30";
   }

   getHabilidadesClase() {
       return [
           ARTE_ARTESANIA_CUSTOM,
           BUSCAR_LIBROS,
            LENGUA_PROPIA,
            PSICOLOGIA
       ];
   }

}

export default Secretario;