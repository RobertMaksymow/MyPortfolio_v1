import React from "react";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Learning", path: "/learning" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav>
      <Logo />
      {menuItems.map((item) => (
        <Link key={item.name} to={item.path} className="navbar-item">
          {item.name}
        </Link>
      ))}
      <NavbarButton />
    </nav>
  );
};

export default Navbar;
