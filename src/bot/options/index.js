import { add } from '../actions/investigadores';


export const options = [
    {
        name: "nuevo",
        type: "command",
        description: "Nuevo investigador",
        action: add
    },
    {
        name: "lista",
        type: "command",
        description: "Lista de investigadores",
        action: null
    },
    {
        name: "detalle",
        type: "command",
        description: "Ver detalle de un investigador",
        action: null
    }
];