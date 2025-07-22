import { useEffect, useReducer } from "react"
import tareasReducer from "../reducers/tareasReducer"
import type { Tareas } from "../types/Tareas"


const useTareas = () => {


    const [tareas, dispatch] = useReducer(tareasReducer, [], () => {
        const localSorage = localStorage.getItem('tareas')

        return localSorage ? JSON.parse(localSorage) : []
    })


    useEffect(() => {
      
    localStorage.setItem("tareas",JSON.stringify(tareas))
      
    }, [tareas])
    

    
    //crear tarea 
    const crearTarea = (tarea: Tareas) => {
        dispatch({ type: "nueva_tarea", payload: tarea })
    }

    //editar tarea
    const EditarTarea = (tareaEditada: Tareas) => {
        dispatch({ type: "editar_tarea", payload: tareaEditada })
    }

    //eliminar

    const eliminarTarea = (tareaEliminada: string) => {
        dispatch({ type: "eliminar_tarea", payload: tareaEliminada })
    }


    return {
        tareas,
        crearTarea,
        EditarTarea,
        eliminarTarea
    }
}

export default useTareas