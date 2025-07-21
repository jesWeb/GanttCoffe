import { useEffect, useState } from "react";
import { FrappeGantt, ViewMode, type Task } from "react-frappe-gantt"
import { useTareasContext } from "../context/TareasContext";
import { Modal } from "./Modal";

const GanTareas = () => {

    const { tareas } = useTareasContext()

    const [TareasGantt, setTareasGantt] = useState<Task[]>([])
    const [ModoView, setModoView] = useState(ViewMode.Month)
    const [SeleccionTarea, setSeleccionTarea] = useState<Task | null>(null)




    useEffect(() => {

        // if (!tareas || tareas.length === 0) {
        //     console.log('no hay tareas en el redner');

        // }

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



    const clickTarea = (tarea: Task) => {
        console.log("Hemos hecho click en la tarea", tarea)
        setSeleccionTarea(tarea)
    }

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
                    <>
                        <FrappeGantt
                            tasks={TareasGantt}
                            viewMode={ModoView}
                            onclick={clickTarea}
                        />
                        {SeleccionTarea &&
                            <Modal
                                titulo={SeleccionTarea.name}
                                onClose={() => setSeleccionTarea(null)}
                            >
                                <p>
                                    <span className="font-bold">Fecha de inicio:</span>
                                    {new Date(SeleccionTarea.start).toLocaleDateString("es-ES")}
                                </p>
                                <p>
                                    <span className="font-bold">Fecha de finalización:</span>
                                    {new Date(SeleccionTarea.end).toLocaleDateString("es-ES")}
                                </p>
                                <p>{SeleccionTarea.progress}% Completado</p>
                            </Modal>
                        }
                    </>
                ) : (
                    <p>No hay tareas para mostrar. Crea una tarea para ver el diagrama de Gantt.</p>
                )}

            </div>
        </>
    )
}
export default GanTareas