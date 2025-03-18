"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl p-5'>Selecciona una fecha</h2>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                locale={es}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Hora"
                className='bg-white w-[500px] text-black rounded-2xl p-4'
            />

        </div>
    );
};

export default DateSelector;
