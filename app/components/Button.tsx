import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  primary?: boolean;
  classNames: string;
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
          ? "bg-red-600 hover:bg-red-500 active:bg-red-700"
          : "bg-secondary-50 hover:bg-secondary-200 active:bg-secondary-100"
      } duration-100 text-lg text-white border-none font-primary ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
