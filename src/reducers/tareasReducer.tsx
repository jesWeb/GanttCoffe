import type { Tareas } from "../types/Tareas"

const initialState: Tareas[] = []

type Action = { type: "nueva_tarea"; payload: Tareas }


function tareasReducer(state: Tareas[] = initialState, action: Action): Tareas[] {

    if (action.type === "nueva_tarea") {
        console.log("Agregando Tarea en el reducer", action.payload);

        return [
            ...state,
            action.payload,
        ]
    }


    return state
}


export default tareasReducer