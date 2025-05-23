import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./views/Inicio";
import MisEventos from "./views/MisEventos";
import NuestrosPaquetes from "./views/NuestrosPaquetes";
import Nostros from "./views/Nostros";
import Calendario from "./views/Calendario";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />


        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nostros />} />
            <Route path="/nuestros-paquetes" element={<NuestrosPaquetes />} />
            <Route path="/mis-eventos" element={<MisEventos />} />
             <Route path="/calendario" element={<Calendario />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
