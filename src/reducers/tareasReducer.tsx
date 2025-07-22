import type { Tareas } from "../types/Tareas"

const initialState: Tareas[] = []

type Action =
    { type: "nueva_tarea"; payload: Tareas } |
    { type: "editar_tarea"; payload: Tareas } |
    { type: "eliminar_tarea"; payload: string }


function tareasReducer(state: Tareas[] = initialState, action: Action): Tareas[] {
    //crear nueva tarea
    if (action.type === "nueva_tarea") {
        console.log("Agregando Tarea en el reducer", action.payload);

        return [
            ...state,
            action.payload,
        ]
    }

    //editar
    if (action.type === "editar_tarea") {
        return state.map((tarea) => tarea.id === action.payload.id ? { ...tarea, ...action.payload } : tarea)
    }

    //eliminar 
    if (action.type === "eliminar_tarea") {
        return state.filter((tarea) => tarea.id !== action.payload)
    }

    


    return state
}


export default tareasReducer