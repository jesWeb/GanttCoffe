import Formulario from "./components/Formulario"
import GanTareas from "./components/GanTareas"

function App() {

  return (
    <>
      <div className="flex justify-center pt-10 min-h-screen  bg-slate-400">
        <div className="W-4/5 bg-slate-200 rounded shadow-md">
          <h1 className="text-2xl mb-4 text-center">Gestion de tareas</h1>
          <div className="w-11/12 mx-auto">
            <Formulario />
            <GanTareas />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
