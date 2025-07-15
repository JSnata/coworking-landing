import React from 'react';
import locationIcon from '../../assets/icons/pin.svg'

const SelectBox = ({ options = [], ...props }) => {
  return (
    <div className="relative w-full md:w-auto">
      <img
        src={locationIcon}
        alt="Location"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
      />
      <select
        className="w-full px-10 py-3 border rounded text-gray-700 appearance-none"
        {...props}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
