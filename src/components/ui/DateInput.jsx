import React from 'react';
import calendarIcon from '../../assets/icons/calendar.svg';

const DateInput = ({ ...props }) => {
  return (
    <div className="relative w-full md:flex-1">
      <img
        src={calendarIcon}
        alt="calendar"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
      />
      <input
        type="date"
        className="w-full appearance-none pl-10 pr-4 py-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand
        [&::-webkit-calendar-picker-indicator]:opacity-0
        [&::-webkit-calendar-picker-indicator]:absolute
        [&::-webkit-calendar-picker-indicator]:right-3
        [&::-webkit-calendar-picker-indicator]:z-10"
        {...props}
      />
    </div>
  );
};

export default DateInput;
