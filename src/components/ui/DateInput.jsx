import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import calendarIcon from "../../assets/icons/calendar.svg";

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <div className="relative w-full">
    <img
      src={calendarIcon}
      alt="calendar"
      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10"
    />
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className="w-full h-[48px] text-base font-light pl-10 pr-4 border border-gray-300 rounded text-gray-700 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
    />
  </div>
));

const DateInput = ({ ...props }) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Select date"
      dateFormat="dd.MM.yyyy"
      calendarClassName="!z-50"
      popperPlacement="bottom-start"
      customInput={<CustomInput />}
      {...props}
    />
  );
};

export default DateInput;
