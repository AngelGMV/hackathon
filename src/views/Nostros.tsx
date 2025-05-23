import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex flex-col items-center justify-between">
      <div className="text-black font-body text-center max-w-3xl px-4 mt-10">
        <p className="text-lg md:text-xl leading-relaxed">
          <span className="text-xl font-bold">Nosotros</span> <br />
          Somos un equipo apasionado por la tecnología y la innovación, comprometido con transformar 
          la industria de los banquetes mediante soluciones digitales inteligentes. Nuestra misión es 
          mejorar la experiencia del cliente y optimizar la operación de empresas del sector, reduciendo 
          errores logísticos y facilitando decisiones en tiempo real.
        </p>
        <div className="flex justify-between gap-25 mt-6">
          <div className="flex space-x-4">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-xl font-bold">Mision</span> <br />
              Brindar soluciones tecnológicas integrales que transformen la gestión de eventos y 
              banquetes, optimizando la logística, mejorando la experiencia del cliente y facilitando 
              la toma de decisiones en tiempo real para empresas del sector.
            </p>
          </div>
          <div className="flex space-x-4">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-xl font-bold">Vision</span> <br />
              Ser la plataforma líder en innovación digital para la industria de banquetes y eventos 
              en Latinoamérica, reconocida por su eficiencia, personalización y capacidad para 
              revolucionar la forma en que se planifican y ejecutan celebraciones inolvidables.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
