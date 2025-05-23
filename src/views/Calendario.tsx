import Calendario20 from "../components/Calendario20";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEventoStore } from "../store/useEventoStore";
import { useNavigate } from "react-router-dom";

export default function Calendario() {
  const setEvento = useEventoStore((state) => state.setEvento);
  const navigate = useNavigate();

  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [duracion, setDuracion] = useState("");
  const [invitados, setInvitados] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [errorFecha, setErrorFecha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorFecha("");

    if (!fecha) {
      setErrorFecha("Por favor, seleccione una fecha para el evento.");
      return;
    }

    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    const fechaMinima = new Date(hoy);
    fechaMinima.setMonth(fechaMinima.getMonth() + 3);
    fechaMinima.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < fechaMinima) {
      setErrorFecha("La fecha del evento debe ser al menos 3 meses después de hoy.");
      return;
    }

    const datosEvento = {
      fecha,
      horaInicio,
      duracion,
      ubicacion,
      invitados: Number(invitados),
    };

    
    setEvento(datosEvento);


    navigate("/nuestros-paquetes");
  };

  return (
    <div className="bg-[#ebebd3] w-full min-h-screen flex flex-col items-center pt-10">
      <form
        className="text-black font-body text-center space-y-6 w-full max-w-2xl px-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl md:text-5xl font-bold">¡EMPECEMOS!</h1>

        <div>
          <p className="text-2xl md:text-3xl">¿Qué fecha es su evento?</p>
          <div className="mt-4 flex justify-center">
            <Calendario20 onChange={setFecha} />
          </div>
          {errorFecha && (
            <p className="text-red-600 mt-2 text-lg font-medium">{errorFecha}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-1/3 text-left">
            <label className="block text-2xl font-semibold mb-1 mt-8">Hora del evento:</label>
            <input
              type="time"
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="w-full md:w-1/3 text-left">
            <label className="block text-2xl font-semibold mb-1 mt-8">Duración:</label>
            <input
              type="number"
              min={3}
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Horas"
              required
            />
          </div>

          <div className="w-full md:w-1/3 text-left">
            <label className="block text-2xl font-semibold mb-1">Número de invitados:</label>
            <input
              type="number"
              min={50}
              value={invitados}
              onChange={(e) => setInvitados(e.target.value)}
              className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. 100"
              required
            />
          </div>
        </div>

        <div className="text-left">
          <label className="block text-2xl font-semibold mb-1">Ubicación de su evento:</label>
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. https://www.google.com/maps/place/Culiacán,+Sinaloa"
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
