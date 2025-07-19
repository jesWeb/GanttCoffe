import { useReducer } from "react"
import tareasReducer from "../reducers/tareasReducer"
import type { Tareas } from "../types/Tareas"


const useTareas = () => {


    const [tareas, dispatch] = useReducer(tareasReducer, [])


    const crearTarea = (tarea: Tareas) => {
        dispatch({ type: "nueva_tarea", payload: tarea })
    }




    return {
        tareas,
        crearTarea
    }
}

export default useTareas