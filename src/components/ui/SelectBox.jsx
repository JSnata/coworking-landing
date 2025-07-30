import React from "react";
import Select from "react-select";
import locationIcon from "../../assets/icons/pin.svg";

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    borderColor: state.isFocused ? "#6366F1" : "#d1d5db",
    borderWidth: "1px",
    boxShadow: "none",
    borderRadius: "6px",
    height: "48px",
    minHeight: "48px",
    paddingLeft: "2.5rem",
    fontSize: "1rem",
    fontWeight: 300,
    color: "#374151",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#a5b4fc",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#374151",
    fontWeight: 300,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#374151",
    fontWeight: 300,
    opacity: 1,
    whiteSpace: "nowrap",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    paddingLeft: "0.25rem",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#374151",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "0 0.75rem",
    color: "#6b7280",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#3b82f6"
      : state.isFocused
      ? "#e0e7ff"
      : "white",
    color: state.isSelected ? "white" : "#374151",
    fontWeight: 300,
    cursor: "pointer",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 50,
    borderRadius: "6px",
    marginTop: "4px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  }),
};

const options = [
  { value: "wroclaw", label: "Wrocław" },
  { value: "warsaw", label: "Warszawa" },
  { value: "gdansk", label: "Gdańsk" },
];

const SelectBox = ({ value, onChange }) => {
  return (
    <div className="relative w-full md:flex-1">
      <img
        src={locationIcon}
        alt="Location"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10"
      />

      <Select
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={(selected) => onChange?.(selected.value)}
        placeholder="Select Location"
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
};

export default SelectBox;
