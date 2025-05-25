import React from "react";
import { Link } from "react-router-dom";

interface NavbarButtonProps {
  name: string;
  path: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ name, path }) => {
  console.log();

  return (
    <li className="navbar-button">
      <Link to={path} className="navbar-button-link">
        {name}
      </Link>
    </li>
  );
};

export default NavbarButton;
