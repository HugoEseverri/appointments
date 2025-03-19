import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showConfirmToast = (onConfirm: () => void) => {
    toast.info(
        <div>
            <p className="font-semibold">¿Seguro que quieres eliminar este turno?</p>
            <div className="flex justify-center gap-3 mt-2">
                <button
                    className="bg-red-700 text-white px-3 py-1 rounded-md hover:bg-red-800"
                    onClick={() => {
                        onConfirm();
                        toast.dismiss();
                        toast.success("Turno eliminado con éxito");
                    }}
                >
                    Sí, eliminar
                </button>
                <button
                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                    onClick={() => toast.dismiss()}
                >
                    Cancelar
                </button>
            </div>
        </div>,
        {
            position: "top-center",
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
        }
    );
};


export const showSuccessToast = () => {
    toast.success("¡Turno agendado con éxito!", {
        position: "top-center",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    });
};