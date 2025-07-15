import React from 'react';

const PrimaryButton = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-12 py-3 bg-primary text-white font-light font-medium rounded-md hover:bg-indigo-800 transition"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
