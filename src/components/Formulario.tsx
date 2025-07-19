import { useState } from "react"

export default function Formulario() {

    const [nombre, setNombre] = useState<string>("")
    const [comienzo, setComienzo] = useState<Date>(new Date())
    const [final, setFinal] = useState<Date>(new Date())
    const [progreso, setProgreso] = useState<number>(0)
    const [modo, setModo] = useState<"crear" | "Editar">("crear")
    const [SeleccionarTareaId, setSeleccionarTareaId] = useState<string | null>(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        //fecha formateada
        const fechaFormateadaInicio = comienzo.toISOString().split("T")[0]
        const fechaFormateadaFin = final.toISOString().split("T")[0]

        const nuevaTarea = {
            id: SeleccionarTareaId || Date.now().toString(),
            nombre,
            comiezo: fechaFormateadaInicio,
            final: fechaFormateadaFin,
            progreso
        }

        console.log(nuevaTarea)



        resetearFormulario()
    }


    const resetearFormulario = () => {
        setNombre("")
        setComienzo(new Date())
        setFinal(new Date())
        setProgreso(0)
        setModo("crear")
        setSeleccionarTareaId(null)

    }





    return (
        <>
            <form className="w-full p-4 bg-red-400 rounded shadow-md "
                onSubmit={handleSubmit}
            >
                {/* input para nuevos proyectos y select para selleccionar proyecto */}
                <div className="flex justify-between items-center  gap-x-8 ">
                    {modo === "crear" ? (
                        <input
                            type="text"
                            required
                            placeholder="Nombre del proyecto"
                            className="w-1/4 p-2 border border-gray-300 rounded"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    ) : (
                        <select
                            className="w-1/4 p-2 border border-gray-300 rounded"
                            value={SeleccionarTareaId || ""}
                        >
                            <option
                            >-- selecciona una opcion --</option>
                        </select>
                    )}


                    {/* campos de fecha */}
                    <input
                        required
                        value={comienzo.toISOString().split("T")[0]}
                        className="w-1/6 p-2 border border-gray-300 rounded"
                        type="date"
                        onChange={(e) => setComienzo(new Date(e.target.value))}
                    />
                    <input
                        required
                        value={final.toISOString().split("T")[0]}
                        className="w-1/6 p-2 border border-gray-300 rounded"
                        type="date"
                        onChange={(e) => setFinal(new Date(e.target.value))}
                    />

                    {/* campo de Progreso o tarea */}

                    <div className="flex items-center border border-gray-50 rounded w-32">
                        <input
                            type="number"
                            className="w-full p-2 border-gray-300 rounded"
                            value={progreso}
                            onChange={(e) => setProgreso(Number(e.target.value))}
                        />
                        <span className="p-2 bg-gray-200 rounded-r">&</span>
                    </div>

                    {/* Botones */}
                    <button
                        type="submit"
                        className="bg-blue-500 w-50 text-white p-2 rounded">{
                            modo === "crear" ? "Crear Tarea" : "Actualizar Tarea"
                        }</button>

                    {modo === "Editar" && (
                        <button
                            type="button"
                            className="bg-red-500 text-white w-50 p-2 rounded">Eliminar</button>

                    )}

                    <button
                        type="button"
                        onClick={() => {
                            setModo(modo === "crear" ? "Editar" : "crear")
                        }}
                        className="bg-orange-300 text-white p-2 rounded">
                        {modo === "crear" ? "Cambiar a Editar/Eliminar" : "Cambiar a crear"}
                    </button>
                </div>
            </form>
        </>
    )
}
