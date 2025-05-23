import { useNavigate } from "react-router-dom";
import { useEventoStore } from "../store/useEventoStore";
import Packages from "../components/Packages";
import paqueteEmpresarial from '../assets/img/paqueteEmpresarial.jpeg';
import paqueteBoda from '../assets/img/paqueteBoda.jpeg';
import paqueteBasico from '../assets/img/paqueteBasico.jpeg';
import {
  descripcionBasico,
  descripcionEmpresarial,
  descripcionBoda
} from "../data/paquetesData";
import Footer from "../components/Footer";

export default function NuestrosPaquetes() {
  const navigate = useNavigate();
  const setEvento = useEventoStore((state) => state.setEvento);

  // Función para manejar selección de paquete
  const seleccionarTipo = (tipoEvento: string) => {
    setEvento({ tipoEvento }); // ← guarda en el store
    navigate("/mis-eventos");
  };

  return (
    <div className="bg-[#ebebd3] min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center pt-10">
        <h1 className="text-black font-body text-center text-5xl md:text-7xl mb-8">
          Nuestros Paquetes
        </h1>

        <div className="w-full flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            <Packages
              eventType="Banquete Básico"
              imgEventType={paqueteBasico}
              description={descripcionBasico}
              onClick={() => seleccionarTipo("Banquete Básico")}
            />
            <Packages
              eventType="Empresarial"
              imgEventType={paqueteEmpresarial}
              description={descripcionEmpresarial}
              onClick={() => seleccionarTipo("Empresarial")}
            />
            <Packages
              eventType="Boda"
              imgEventType={paqueteBoda}
              description={descripcionBoda}
              onClick={() => seleccionarTipo("Boda")}
            />
          </div>
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
