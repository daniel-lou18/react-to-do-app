import React, { useState, forwardRef } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import './DueDate.css';

registerLocale('fr', fr);

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button type="button" className="form-date form-container" onClick={onClick} ref={ref}>
    <svg className="form-date" style={{width:15, height:15}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
    </svg>
    {value}
  </button>
));

const DueDate = ({ startDate, setStartDate }) => {

  return (
      <div className="dueDate">
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale='fr'
            dateFormat='d MMM y'
            customInput={<CustomInput />}
        />
      </div>
  )
}

export default DueDate;
