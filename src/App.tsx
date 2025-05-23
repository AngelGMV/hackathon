import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./views/Inicio";
import MisEventos from "./views/MisEventos";
import NuestrosPaquetes from "./views/NuestrosPaquetes";
import Nostros from "./views/Nostros";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header siempre visible */}
        <Header />

        {/* Contenido que cambia según la ruta */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nostros />} />
            <Route path="/nuestros-paquetes" element={<NuestrosPaquetes />} />
            <Route path="/mis-eventos" element={<MisEventos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
