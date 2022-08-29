import React from "react";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="font-primary text-lg md:text-xl text-white opacity-80">
      {children}
    </p>
  );
};

export default Text;
