"use client";

import React from "react";
import useTurnoStore from "@/store/turnoStore";
import Image from "next/image";
import chair from "@/../public/chair2.jpg";
import { showConfirmToast } from "@/app/components/Toast/ConfirmToast"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
    const { turnos, eliminarTurno } = useTurnoStore();

    const handleDelete = (id: number) => {
        showConfirmToast(() => eliminarTurno(id));
    };

    return (
        <div className="flex justify-center ml-[300px] mr-[300px] mb-[70px] mx-auto bg-gradient-to-b from-gray-200 to-gray-200 h-[750px]">
            <div className="flex-1 p-8 flex flex-col items-center">
                <div className="max-w-2xl w-full h-[750px]">
                    <h2 className="text-3xl font-semibold text-[#5a7856] mb-5 text-center"> 
                        Turnos Guardados
                    </h2>
                    <hr className="w-3/4 border-t-2 border-[#5a7856] ml-[79px] mb-5" />
                    {turnos.length === 0 ? (
                        <p className="text-gray-500 text-center text-lg">No hay turnos guardados.</p>
                    ) : (
                        <div className="w-full">
                            <div className="grid grid-cols-3 gap-4 border-b-2 border-gray-300 pb-2 font-semibold text-lg text-gray-700">
                                <div className="text-center">📅 Fecha</div>
                                <div className="text-center">⏰ Hora</div>
                                <div className="text-center">🗑️ Acción</div>
                            </div>
                            <div className="divide-y divide-gray-300">
                                {turnos.map((turno) => (
                                    <div
                                        key={turno.id}
                                        className="grid grid-cols-3 gap-4 py-3 text-gray-900 items-center"
                                    >
                                        <div className="text-center">{turno.fecha}</div>
                                        <div className="text-center">{turno.hora}</div>
                                        <div className="flex justify-center">
                                            <button
                                                className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 hover:shadow-lg transition duration-300 cursor-pointer"
                                                onClick={() => handleDelete(turno.id)}
                                            >
                                                ❌ Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-1 h-[750px] relative">
                <Image
                    src={chair}
                    alt="Chair"
                    style={{ objectFit: "cover" }}
                    fill
                />

            </div>


            <ToastContainer position="top-center" />
        </div>
    );
};

export default Appointment;
