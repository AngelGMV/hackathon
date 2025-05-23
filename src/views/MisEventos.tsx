import { useState } from 'react';
import { useEventoStore } from '../store/useEventoStore';

const menus = {
  Platillos: [
    { nombre: 'Lomo de cerdo', imagen: 'src/assets/img/cerdo.jpeg' },
    { nombre: 'Lomo de res', imagen: 'src/assets/img/res.jpeg' },
    { nombre: 'Lomo de pollo', imagen: 'src/assets/img/pollo.jpeg' },
    { nombre: 'Pechuga al mole', imagen: 'src/assets/img/mole.jpeg' },
    { nombre: 'Pechuga al pistache', imagen: 'src/assets/img/pistache.jpeg' },
    { nombre: 'Pechuga Almendrada', imagen: 'src/assets/img/almendrada.jpeg' },
    { nombre: 'Pechuga con Salsa de cilantro', imagen: 'src/assets/img/cilantro.jpeg' }
  ],
  Postres: [
    { nombre: 'Pastel de chocolate', imagen: '/img/pastel.jpg' },
    { nombre: 'Flan napolitano', imagen: '/img/flan.jpg' }
  ],
  'Postres salados': [
    { nombre: 'Queso relleno', imagen: '/img/queso.jpg' },
    { nombre: 'Tartaleta de espinaca', imagen: '/img/tartaleta.jpg' }
  ],
  'Servicios adicionales': [
    { nombre: 'Decoración floral', imagen: '/img/flores.jpg' },
    { nombre: 'DJ en vivo', imagen: '/img/dj.jpg' }
  ]
};

export default function MisEventos() {
  const {
    fecha,
    horaInicio,
    ubicacion,
    invitados,
    duracion,
    tipoEvento,
    seleccionados,
    toggleSeleccionado
  } = useEventoStore();

  const [categoria, setCategoria] = useState<keyof typeof menus>('Platillos');

  const guardarEvento = async () => {
    const payload = {
      fecha,
      horaInicio,
      ubicacion,
      invitados,
      duracion,
      tipoEvento,
      seleccionados,
    };

    try {
      const res = await fetch("http://localhost:3001/api/eventos/completo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert("Evento guardado con éxito. ID: " + data.insertId);
    } catch (err) {
      console.error("Error al guardar evento:", err);
      alert("Hubo un error al guardar el evento.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#ebebd3]">
      {/* Menú lateral */}
      <div className="w-[200px] bg-[#083d77] text-white p-4 space-y-3">
        <h2 className="text-lg font-bold mb-4">Categorías</h2>
        {Object.keys(menus).map((cat) => (
          <button
            key={cat}
            className={`block w-full text-left py-2 px-3 rounded ${
              categoria === cat ? 'bg-white text-[#083d77]' : 'hover:bg-[#0a4d99]'
            }`}
            onClick={() => setCategoria(cat as keyof typeof menus)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-body font-semibold text-black mb-4">Menú para {tipoEvento}</h1>

        {/* Datos del evento */}
        <div className="bg-white shadow p-4 rounded mb-6 text-gray-700">
          <p><strong>Fecha:</strong> {fecha}</p>
          <p><strong>Hora:</strong> {horaInicio}</p>
          <p><strong>Duración:</strong> {duracion} horas</p>
          <p><strong>Ubicación:</strong> {ubicacion}</p>
          <p><strong>Invitados:</strong> {invitados}</p>
          <p><strong>Tipo de evento:</strong> {tipoEvento}</p>
        </div>

        {/* Grid de selección */}
        <h2 className="text-xl font-bold mb-3 text-black">Selecciona {categoria.toLowerCase()}:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {menus[categoria].map((item) => (
            <div
              key={item.nombre}
              onClick={() => toggleSeleccionado(item.nombre)}
              className={`border-2 p-2 rounded cursor-pointer transition ${
                seleccionados.includes(item.nombre) ? 'border-blue-600' : 'border-transparent'
              }`}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-full object-cover rounded"
              />
              <p className="text-center mt-2">{item.nombre}</p>
            </div>
          ))}
        </div>

        {/* Cotización */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Seleccionado:</h2>
          {seleccionados.length === 0 ? (
            <p className="italic text-gray-600">Aún no has seleccionado ningún platillo o servicio.</p>
          ) : (
            <ul className="list-disc pl-5">
              {seleccionados.map((nombre) => (
                <li key={nombre}>{nombre}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Botón para guardar */}
        <div className="mt-8">
          <button
            onClick={guardarEvento}
            className="bg-[#083d77] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#062d50] transition"
          >
            Finalizar evento
          </button>
        </div>
      </div>
    </div>
  );
}
