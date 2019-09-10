import { CONTABILIDAD, DESCUBRIR, ELECTRICIDAD, ESCUCHAR, MECANICA, ORIENTARSE, PILOTAR_CUSTOM } from "../habilidades";

class PilotoAviador {

    constructor() {
        this.customHabilidades = [{}];
        this.name = 'aviador';
    }

   getPuntosHabilidad() {
       return "edu*4";
   }

   getCredito() {
       return "30-60";
   }

   getHabilidadesClase() {
       return [
           CONTABILIDAD,
           DESCUBRIR,
           ELECTRICIDAD,
           ESCUCHAR,
           MECANICA,
           ORIENTARSE,
           PILOTAR_CUSTOM
       ];
   }

}

export default PilotoAviador;