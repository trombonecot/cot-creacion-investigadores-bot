import { add, list, detail } from '../actions/investigadores';


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
        action: list
    },
    {
        name: "detalle",
        type: "command",
        description: "Ver detalle de un investigador",
        action: null
    }
];