import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Para español
dayjs.locale("es");

const Calendario20 = () => {
  const [fechaActual, setFechaActual] = useState(dayjs());
  const [fechaSeleccionada, setFechaSeleccionada] = useState<dayjs.Dayjs | null>(null);

  const inicioMes = fechaActual.startOf("month");
  const finMes = fechaActual.endOf("month");

  const inicioSemana = inicioMes.startOf("week");
  const finSemana = finMes.endOf("week");

  const dias = [];
  let dia = inicioSemana;

  while (dia.isBefore(finSemana)) {
    dias.push(dia);
    dia = dia.add(1, "day");
  }

  const esMismoDia = (a: dayjs.Dayjs, b: dayjs.Dayjs) => a.isSame(b, "day");

  const cambiarMes = (offset: number) => {
    setFechaActual(fechaActual.add(offset, "month"));
  };

  return (
    <div className="w-72 bg-white rounded-lg shadow p-4 text-center">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => cambiarMes(-1)} className="text-xl">‹</button>
        <h2 className="text-red-500 text-2xl font-bold capitalize">
          {fechaActual.format("MMMM")} <span className="text-black text-lg">{fechaActual.format("YYYY")}</span>
        </h2>
        <button onClick={() => cambiarMes(1)} className="text-xl">›</button>
      </div>

      <div className="grid grid-cols-7 text-xs text-gray-500 font-bold border-b pb-1">
        {["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"].map((d) => (
          <div key={d} className="uppercase">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1 pt-2">
        {dias.map((d) => {
          const fueraDeMes = !d.isSame(fechaActual, "month");
          const seleccionado = fechaSeleccionada && esMismoDia(d, fechaSeleccionada);
          const esDomingo = d.day() === 0;

          return (
            <button
              key={d.format("DD-MM-YYYY")}
              onClick={() => setFechaSeleccionada(d)}
              className={`text-sm rounded-full w-8 h-8 mx-auto
                ${fueraDeMes ? "text-gray-300" : esDomingo ? "text-red-500" : "text-black"}
                ${seleccionado ? "bg-red-500 text-white font-bold" : "hover:bg-red-100"}
              `}
            >
              {d.date()}
            </button>
          );
        })}
      </div>

      {fechaSeleccionada && (
        <div className="mt-4 text-sm text-gray-700">
          Seleccionaste: <strong>{fechaSeleccionada.format("D [de] MMMM YYYY")}</strong>
        </div>
      )}
    </div>
  );
};

export default Calendario20;
