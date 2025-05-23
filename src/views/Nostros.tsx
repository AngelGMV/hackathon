import Footer from "../components/Footer";
import RedesSociales from "../components/RedesSociales";

export default function Nosotros() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex flex-col items-center justify-between">
      <div className="text-black font-body text-center max-w-3xl px-4 mt-10">
        <p className="text-lg md:text-xl leading-relaxed">
          Somos un equipo apasionado por la tecnología y la innovación, comprometido con transformar la industria de los banquetes mediante soluciones digitales inteligentes. Nuestra misión es mejorar la experiencia del cliente y optimizar la operación de empresas del sector, reduciendo errores logísticos y facilitando decisiones en tiempo real. En este hackathon, combinamos creatividad, análisis y desarrollo para construir herramientas funcionales, escalables y centradas en el usuario que marquen una diferencia real en la gestión de eventos.
        </p>
      </div>
      <Footer />
    </div>
  );
}
