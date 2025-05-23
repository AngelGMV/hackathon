import Calendario20 from "../components/Calendario20";

export default function Calendario() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex items-top justify-center">
      <div className="text-black font-body text-center space-y-6">
        <p className="text-4xl md:text-6xl leading-snug font-bold">
          ¡EMPECEMOS!
        </p>
        <p className="text-2xl md:text-3xl leading-snug">
          ¿Qué fecha es tu evento?
        </p>
        <div className="flex justify-center">
          <Calendario20 />
        </div>
      </div>
    </div>
  );
}
