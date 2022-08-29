import React, { useState } from "react";

interface RangeInputProps {
  name: string;
  label: string;
  max: string;
}

const RangeInput: React.FC<RangeInputProps> = ({ name, max, label }) => {
  const [value, setValue] = useState(0);
  const handleValue = (event) => {
    event.preventDefault();
    setValue(event.target.current);
  };
  return (
    <div className="flex flex-col item-start">
      <label htmlFor={name} className="text-white text-opacity-80 font-primary">
        {label}
      </label>
      <input
        type="range"
        min="1"
        max={max}
        value={value}
        onChange={handleValue}
        name={name}
        className="bg-primary-300"
      />
    </div>
  );
};

export default RangeInput;
