import { createContext, useContext, type ReactNode } from "react"
import type { Tareas } from "../types/Tareas"
import useTareas from "../hooks/useTareas"

interface TareasContextType {
    tareas: Tareas[]
    crearTarea: (tarea: Tareas) => void
}

const tareasContext = createContext<TareasContextType | undefined>(undefined)


export const TareasProvider = ({ children }: { children: ReactNode }) => {

    const { tareas, crearTarea } = useTareas()

    return (
        <tareasContext.Provider
            value={{ tareas, crearTarea }}
        >
            {children}
        </tareasContext.Provider>
    )
}

export const useTareasContext = () => {
    const context = useContext(tareasContext)

    if (!context) {
        throw new Error("useTareaContext debe ser usado dentro de un provider ")
    }

    return context

}