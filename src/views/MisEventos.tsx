import { useState } from 'react';

const menus = {
  Platillos: [
    { nombre: 'Lomo de cerdo', imagen: '/img/cerdo.jpg' },
    { nombre: 'Pechuga al mole', imagen: '/img/mole.jpg' }
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
  const [categoria, setCategoria] = useState<keyof typeof menus>('Platillos');
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const togglePlatillo = (nombre: string) => {
    setSeleccionados((prev) =>
      prev.includes(nombre)
        ? prev.filter((p) => p !== nombre)
        : [...prev, nombre]
    );
  };

  return (
    <div className="flex min-h-screen bg-[#ebebd3]">
      {/* Menú lateral */}
      <div className="w-[200px] bg-[#083d77] text-white p-4 space-y-3">
        <h2 className="text-lg font-bold mb-4">Menú</h2>
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
        <h1 className="text-3xl font-body font-semibold text-black mb-4">Nuestros {categoria.toLowerCase()}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {menus[categoria].map((item) => (
            <div
              key={item.nombre}
              onClick={() => togglePlatillo(item.nombre)}
              className={`border-2 p-2 rounded cursor-pointer transition ${
                seleccionados.includes(item.nombre) ? 'border-blue-600' : 'border-transparent'
              }`}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-20 object-cover rounded"
              />
              <p className="text-center mt-2">{item.nombre}</p>
            </div>
          ))}
        </div>

        {/* Cotización */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Cotización:</h2>
          {seleccionados.length === 0 ? (
            <p className="italic">Aún no has seleccionado ningún platillo o servicio.</p>
          ) : (
            <ul className="list-disc pl-5">
              {seleccionados.map((nombre) => (
                <li key={nombre}>{nombre}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
