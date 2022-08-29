import React from "react";
import { Link } from "@remix-run/react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center justify-between py-4 mb-10 md:mb-20">
      <Link
        to="/"
        className="font-bold font-primary text-secondary-300 text-3xl"
      >
        Youtemy
      </Link>
      <ul className="flex flex-row items-center space-x-6">{children}</ul>
    </nav>
  );
};

export default Navbar;
