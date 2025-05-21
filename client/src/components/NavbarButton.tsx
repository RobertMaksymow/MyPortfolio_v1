import React from "react";
import { Link } from "react-router-dom";

interface NavbarButtonProps {
  name: String;
  path: String;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ name, path }) => {
  console.log();

  return (
    <div className="navbar-button">
      <Link to={path} className="navbar-button">
        {name}
      </Link>
    </div>
  );
};

export default NavbarButton;
