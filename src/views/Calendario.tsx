import Calendario20 from "../components/Calendario20";
import Footer from "../components/Footer";

export default function Calendario() {
  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex flex-col items-center pt-10">
      <form
        className="text-black font-body text-center space-y-6 w-full max-w-2xl px-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-4xl md:text-5xl font-bold">¡EMPECEMOS!</h1>

        <div>
          <p className="text-2xl md:text-3xl">¿Qué fecha es su evento?</p>
          <div className="mt-4 flex justify-center">
            <Calendario20 />
          </div>
        </div>
        <div className="text-left">
          <label className="block text-2xl font-semibold mb-1">Hora del evento:</label>
          <input
            type="time"
            className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-left">
          <label className="block text-2xl font-semibold mb-1">Ubicación de su evento:</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. https://www.google.com/maps/place/Culiacán,+Sinaloa/@24.8091,-107.3940,13z"
            required
          />
        </div>

        <div className="text-left">
          <label className="block text-2xl font-semibold mb-1">Número de invitados:</label>
          <input
            type="number"
            min={1}
            className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. 100"
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-[#083d77] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#062d50] transition"
          >
            Continuar
          </button>
        </div>
      </form>

      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}
