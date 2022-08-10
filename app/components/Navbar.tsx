import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center justify-between py-4">
      <h2 className="font-bold font-primary text-secondary-50 text-3xl">
        Youtemy
      </h2>
      <ul className="flex flex-row items-center space-x-6">{children}</ul>
    </nav>
  );
};

export default Navbar;
