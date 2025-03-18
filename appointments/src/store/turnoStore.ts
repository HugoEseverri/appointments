import { create } from "zustand"

type Turno = {
    id: number;
    fecha: string;
    hora: string;
};
interface TurnoStore {
    turnos: Turno[];
    agregarTurno: (turno: Turno) => void;
    eliminarTurno: (id: number) => void;
}

// Crear el store de Zustand
const useTurnoStore = create<TurnoStore>((set) => ({
    turnos: [] as Turno[],
    agregarTurno: (turno: Turno) =>
        set((state) => ({
            turnos: [...state.turnos, turno],
        })),

    eliminarTurno: (id: number) =>
        set((state) => ({
            turnos: state.turnos.filter((turno) => turno.id !== id), // Filtra los turnos que no coinciden con el id
        })),
}));

export default useTurnoStore;