import React, { useState, forwardRef } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fr', fr);

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button type="button" className="form-date form-container" onClick={onClick} ref={ref}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="form-date feather feather-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>

    {value}
  </button>
));

const DueTime = ({ startDate, setStartDate }) => {

  return (
      <div className="dueTime">
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale='fr'
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            timeCaption="Heure"
            dateFormat="HH:mm"
            customInput={<CustomInput />}
        />
      </div>
  )
}

export default DueTime;
