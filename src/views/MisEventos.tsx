import { useState } from 'react';

const menus = {
  Platillos: [
    { nombre: 'Lomo de cerdo', imagen: 'src/assets/img/cerdo.jpeg', precio: 200 },
    { nombre: 'Lomo de res', imagen: 'src/assets/img/res.jpeg', precio: 250 },
    { nombre: 'Lomo de pollo', imagen: 'src/assets/img/pollo.jpeg', precio: 150 },
    { nombre: 'Pechuga al mole', imagen: 'src/assets/img/mole.jpeg', precio: 180 },
    { nombre: 'Pechuga al pistache', imagen: 'src/assets/img/pistache.jpeg', precio: 220 },
    { nombre: 'Pechuga Almendrada', imagen: 'src/assets/img/almendrada.jpeg', precio: 230 },
    { nombre: 'Pechuga con Salsa de cilantro', imagen: 'src/assets/img/cilantro.jpeg', precio: 200 }
  ],
  Postres: [
    { nombre: 'Pastel de chocolate', imagen: 'src/assets/img/chocolate.jpeg', precio: 120 },
    { nombre: 'Flan napolitano', imagen: 'src/assets/img/flan.jpeg', precio: 80 }
  ],
  'Postres salados': [
    { nombre: 'Queso relleno', imagen: 'src/assets/img/queso.jpeg', precio: 100 },
    { nombre: 'Tartaleta de espinaca', imagen: 'src/assets/img/tartaleta.jpeg', precio: 90 }
  ],
  'Servicios adicionales': [
    { nombre: 'Decoración floral', imagen: 'src/assets/img/flores.jpeg', precio: 300 },
    { nombre: 'DJ en vivo', imagen: 'src/assets/img/dj.jpeg', precio: 500 }
  ]
};

export default function MisEventos() {
  const [categoria, setCategoria] = useState<keyof typeof menus>('Platillos');
  const [seleccionados, setSeleccionados] = useState<{ nombre: string; precio: number; imagen: string }[]>([]);

  const togglePlatillo = (item: { nombre: string; precio: number; imagen: string }) => {
    setSeleccionados((prev) =>
      prev.some((p) => p.nombre === item.nombre)
        ? prev.filter((p) => p.nombre !== item.nombre)
        : [...prev, item]
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
        <div className="flex gap-6 items-start">
        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {menus[categoria].map((item) => (
            <div
              key={item.nombre}
              onClick={() => togglePlatillo(item)}
              className={`border-2 p-2 rounded cursor-pointer transition ${
                seleccionados.includes(item) ? 'border-blue-600' : 'border-transparent'
            } hover:border-blue-400`}
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

        {/* Cotización box */}
        <div className="w-[300px] bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Cotización:</h2>
          {seleccionados.length === 0 ? (
            <p className="italic">Aún no has seleccionado ningún platillo o servicio.</p>
          ) : (
            <div>
              <ul className="list-disc pl-5 mb-2">
                {seleccionados.map((elemento) => (
                  <li key={elemento.nombre}>{elemento.nombre} (${elemento.precio})</li>
                ))}
              </ul>
              <p className="font-bold">
                Total: ${seleccionados.reduce((total, item) => total + item.precio, 0)}
              </p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
