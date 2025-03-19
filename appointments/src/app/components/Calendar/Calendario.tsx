"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import useTurnoStore from '@/store/turnoStore';
import Image from 'next/image';
import chair from "@/../public/chair2.jpg";

const DateSelector = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const { turnos, agregarTurno, eliminarTurno } = useTurnoStore();

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
            alert("Turno guardado exitosamente!");
        } else {
            alert("Por favor selecciona una fecha antes de guardar.");
        }
    };

    return (
        <div className="flex justify-center items-center ml-[300px] mr-[300px] mb-[70px] mx-auto bg-gray-200 h-[750px]">
            <div className="flex-1 p-5">
                <div className='flex flex-col items-center'>
                    <h2 className="text-2xl p-5 text-black mb-[50px]">Selecciona una fecha</h2>
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
                        className="w-[300px] text-black p-4  border-2 border-[#5a7856] "
                        placeholderText='Seleccione fechas disponibles aquí'
                    />
                    <button 
                        onClick={handleSave} 
                        className="mt-5 bg-[#5a7856] text-white py-2 px-4 w-[200px]"
                    >
                        Solicitar Turno
                    </button>
                </div>

                {turnos.length > 0 && (
                    <div className="mt-5 w-full max-w-[600px]">
                        <h3 className="text-xl mb-4 text-black">Turnos guardados:</h3>
                        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-300 rounded-xl text-black">
                            <div className="font-semibold">Fecha</div>
                            <div className="font-semibold">Hora</div>
                            <div className="font-semibold">Acciones</div>
                            {turnos.map((turno) => (
                                <React.Fragment key={turno.id}>
                                    <div>{turno.fecha}</div>
                                    <div>{turno.hora}</div>
                                    <div>
                                        <button 
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                                            onClick={() => eliminarTurno(turno.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex-1 h-[750px] relative">
                <Image
                    src={chair}
                    alt="Chair"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default DateSelector;
