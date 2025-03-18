import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    return (
        <div>
            <h2>Selecciona una fecha</h2>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
            />

        </div>
    );
};

export default DateSelector;
