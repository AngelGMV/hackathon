import Calendario20 from "../components/Calendario20";

export default function Calendario() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex  justify-center">
      <div className="text-black font-body text-center">
        <p className="text-4xl md:text-6xl leading-snug">
          !EMPECEMOS¡
        </p>
        <div className="mt-1">
          <p className="text-4xl md:text-1xl leading-snug">
            ¿Que fecha es tu evento?
          </p>
        </div>
        <div className=" justify-center items-center">
          <Calendario20 />
        </div>

      </div>
    </div>
  )
}
