
export default function Formulario() {

    return (
        <>
            <form className="flex justify-between items-center w-full gap-x-8 bg-blue-500" >
                {/* input para nuevos proyectos y select para selleccionar proyecto */}
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-1/4 p-2 border border-gray-300 rounded"
                />

                <select name="" id="" className="w-1/4 p-2 border border-gray-300 rounded">
                    <option value="">-- selecciona una opcion --</option>
                </select>

                {/* campos de fecha */}
                <input
                    className="w-1/6 p-2 border border-gray-300 rounded" type="date" name="" id="" />
                <input
                    className="w-1/6 p-2 border border-gray-300 rounded" type="date" name="" id="" />

                {/* campo de Progreso o tarea */}

                <div className="flex items-center border border-gray-50 rounded w-32">
                    <input type="number" name="" id="" className="w-full p-2 border-gray-300 rounded-" />
                    <span className="p-2 bg-gray-200 rounded-r">&</span>
                </div>

                {/* Botones */}
                <button className="bg-blue-500 text-white p-2 rounded">Creear/Actualizar</button>
                <button className="bg-red-500 text-white p-2 rounded">Eliminar</button>
                <button className="bg-orange-300 text-white p-2 rounded">crear / editar / eliminar</button>




            </form>
        </>
    )
}
