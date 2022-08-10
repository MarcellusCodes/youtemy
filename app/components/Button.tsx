import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-6 py-2 bg-secondary-50 hover:bg-secondary-200 active:bg-secondary-100 duration-100 text-lg text-white">
      {children}
    </button>
  );
};

export default Button;
