import React from "react";
import { Link } from "@remix-run/react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center justify-between py-4">
      <Link to="/">
        <h2 className="font-bold font-primary text-secondary-50 text-3xl">
          Youtemy
        </h2>
      </Link>

      <ul className="flex flex-row items-center space-x-6">{children}</ul>
    </nav>
  );
};

export default Navbar;
