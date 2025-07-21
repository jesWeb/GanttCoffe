import { useEffect, useState } from "react";
import { FrappeGantt, ViewMode, type Task } from "react-frappe-gantt"
import { useTareasContext } from "../context/TareasContext";

const GanTareas = () => {

    const { tareas } = useTareasContext()

    const [TareasGantt, setTareasGantt] = useState<Task[]>([])
    const [ModoView, setModoView] = useState(ViewMode.Month)


    console.log("estas son las tareas registradas", tareas);


    useEffect(() => {

        if (!tareas || tareas.length === 0) {
            console.log('no hay tareas en el redner');
            
        }

        const tareasValidas = tareas.filter((tarea) => tarea.comiezo && tarea.final)

        const tareasMapeadas = tareasValidas.map((tarea) => ({
            id: tarea.id,
            name: tarea.nombre,
            start: tarea.comiezo,
            end: tarea.final,
            progress: tarea.progreso
        }))

        // setTimeout(() => setTareasGantt(tareasMapeadas), 0)
        setTareasGantt(tareasMapeadas)

    }, [tareas])


    return (
        <>
            <div className="mt-5 relative">
                <h2 className="text-xl font-semibold mb-2">
                    Gantt de Tareas
                </h2>

                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={() => setModoView(ViewMode.HalfDay)}
                        className="bg-blue-500 text-white p-2 rounded">Medio Dia</button>
                    <button
                        onClick={() => setModoView(ViewMode.Day)}
                        className="bg-blue-500 text-white p-2 rounded">Dia</button>
                    <button
                        onClick={() => setModoView(ViewMode.Week)}
                        className="bg-blue-500 text-white p-2 rounded">Semana</button>
                    <button
                        onClick={() => setModoView(ViewMode.Month)}
                        className="bg-blue-500 text-white p-2 rounded">Mes</button>

                </div>

                {TareasGantt.length > 0 ? (

                    <FrappeGantt
                        tasks={TareasGantt}
                        viewMode={ModoView}
                    />

                ) : (

                    <p>No hay Tareas para Mostrar.  <br />Crea una tarea para ver el diagrama de Gantt.</p>
                )}
            </div>
        </>
    )
}

export default GanTareas