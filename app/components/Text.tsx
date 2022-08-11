import React from "react";

interface TextProps {
  primary: boolean;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ primary = true, children }) => {
  return (
    <p
      className={`${
        primary ? "text-secondary-50" : "text-red-600"
      } font-primary text-lg md:text-xl opacity-80`}
    >
      {children}
    </p>
  );
};

export default Text;
