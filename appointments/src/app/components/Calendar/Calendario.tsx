"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import useTurnoStore from "@/store/turnoStore";
import { showSuccessToast } from "@/app/components/Toast/ConfirmToast"
import Image from "next/image";
import chair from "@/../public/chair2.jpg";

const DateSelector = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const { turnos, agregarTurno } = useTurnoStore();

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleSave = () => {
        if (startDate) {
            const turno = {
                id: turnos.length + 1,
                fecha: startDate.toLocaleDateString(),
                hora: startDate.toLocaleTimeString(),
            };
            agregarTurno(turno);
            showSuccessToast();
        } else {
            alert("Por favor selecciona una fecha antes de guardar.");
        }
    };

    return (
        <div className="flex justify-center ml-[300px] mr-[300px] mb-[70px] mx-auto bg-gradient-to-b from-gray-200 to-gray-200 h-[750px]">
            <div className="flex-1 p-8">
                <div className="flex flex-col items-center h-full justify-between">
                    <h2 className="text-3xl font-semibold text-[#5a7856] mb-5">
                        Selecciona una Fecha
                    </h2>
                    <hr className="w-3/4 border-t-2 border-[#5a7856] mb-5" />
                    <div className="flex flex-col items-center justify-center flex-grow">
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            locale={es}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="Hora"
                            minDate={new Date()}
                            className="w-[320px] text-black p-4 border-2 border-[#5a7856] rounded-lg shadow-md cursor-pointer"
                            placeholderText="Seleccione fechas disponibles aquí"
                        />
                        <button
                            onClick={handleSave}
                            className="mt-6 bg-[#5a7856] text-white py-3 px-6 w-[220px] rounded-lg shadow-md hover:bg-[#4e6a4d] hover:shadow-lg transition duration-300 cursor-pointer"
                        >
                            🦷 Solicitar Turno
                        </button>
                    </div>
            </div >
        </div>
    <div className="flex-1 h-[750px] relative">
        <Image
            src={chair}
            alt="Chair"
            style={{ objectFit: "cover" }}
            fill
        />

    </div>
        </div >
    );
};

export default DateSelector;
