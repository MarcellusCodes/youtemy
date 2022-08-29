import React from "react";

interface TextInputProps {
  name: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="text-lg border-2 border-transparent bg-primary-300 rounded-md px-2 py-2 w-full focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-tertiary-300  ring-2 ring-primary-300 placeholder:text-white placeholder:text-opacity-80 text-white"
    />
  );
};

export default TextInput;
