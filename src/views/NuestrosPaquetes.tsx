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
  return (
    <div className="bg-[#ebebd3] min-h-screen flex flex-col">
      {/* Contenido principal */}
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
            />
            <Packages
              eventType="Empresarial"
              imgEventType={paqueteEmpresarial}
              description={descripcionEmpresarial}
            />
            <Packages
              eventType="Boda"
              imgEventType={paqueteBoda}
              description={descripcionBoda}
            />
          </div>
        </div>
      </main>

      {/* Footer fijo al final */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
