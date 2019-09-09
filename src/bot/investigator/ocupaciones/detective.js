import { ARMAS_DE_FUEGO_ARMA_CORTA, BUSCAR_LIBROS, COMBATIR_PELEA, PSICOLOGIA, SEGUIR_RASTROS, SIGILO, CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION } from "../habilidades";

class Detective {

    constructor() {
        this.customHabilidades = [{list:[CHARLATENERIA, ENCANTO, INTIMIDAR, PERSUASION]}];
        this.name = 'detective';
    }

   getPuntosHabilidad() {
       return "edu*2+DES*2";
   }

   getCredito() {
       return "20-45";
   }

   getHabilidadesClase() {
       return [
        ARMAS_DE_FUEGO_ARMA_CORTA,
        BUSCAR_LIBROS,
        COMBATIR_PELEA,
        PSICOLOGIA,
        SEGUIR_RASTROS,
        SIGILO
       ];
   }

}

export default Detective;