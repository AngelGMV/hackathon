import Packages from "../components/Packages";
import paqueteEmpresarial from '../assets/img/paqueteEmpresarial.jpeg';
import paqueteBoda from '../assets/img/paqueteBoda.jpeg';
import paqueteBasico from '../assets/img/paqueteBasico.jpeg';
import Footer from "../components/Footer";

export default function NuestrosPaquetes() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex flex-col items-center">
      <p className="text-black font-body text-center text-7xl mt-10 mb-6">
        Nuestros Paquetes
      </p>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
          <Packages eventType="Banquete Básico" imgEventType={paqueteBasico} />
          <Packages eventType="Empresarial" imgEventType={paqueteEmpresarial} />
          <Packages eventType="Boda" imgEventType={paqueteBoda} />
        </div>
      </div>
      <Footer />
    </div>
  );
}


