import { create } from 'zustand';

interface EventoStore {
  fecha: string;
  horaInicio: string;
  duracion: string;
  ubicacion: string;
  invitados: number;
  tipoEvento: string;
  seleccionados: { nombre: string; precio: number; imagen: string }[];
  setEvento: (data: Partial<EventoStore>) => void;
  toggleSeleccionado: (item: { nombre: string; precio: number; imagen: string }) => void;
}

export const useEventoStore = create<EventoStore>((set) => ({
  fecha: '',
  horaInicio: '',
  duracion: '',
  ubicacion: '',
  invitados: 0,
  tipoEvento: '',
  seleccionados: [],
  setEvento: (data) => set((state) => ({ ...state, ...data })),
  toggleSeleccionado: (item) =>
    set((state) => ({
      seleccionados: state.seleccionados.includes(item)
        ? state.seleccionados.filter((i) => i !== item)
        : [...state.seleccionados, item],
    })),
}));
