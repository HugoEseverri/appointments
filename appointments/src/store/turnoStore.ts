import { create } from "zustand"

type Turno = {
    id: number;
    fecha: string;
    hora: string;
};
interface TurnoStore {
    turnos: Turno[];
    agregarTurno: (turno: Turno) => void;
}

// Crear el store de Zustand
const useTurnoStore = create<TurnoStore>((set) => ({
    turnos: [] as Turno[],
    agregarTurno: (turno: Turno) =>
        set((state) => ({
            turnos: [...state.turnos, turno],
        })),
}));

export default useTurnoStore;