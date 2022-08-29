import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  primary?: boolean;
  classNames?: string;
  children: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  primary = false,
  classNames,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 ${
        primary
          ? "bg-tertiary-300 hover:bg-tertiary-500 focus:bg-tertiary-600 border-tertiary-300 hover:border-tertiary-500 focus:border-tertiary-600 text-black"
          : "bg-transparent border-tertiary-300 hover:bg-tertiary-300 focus:bg-tertiary-500 text-white"
      } duration-100 text-lg rounded-md border-2 font-primary ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
