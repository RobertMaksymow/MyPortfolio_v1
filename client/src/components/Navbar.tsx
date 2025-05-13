import React from "react";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Learning", path: "/learning" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/about" },
  ];

  return (
    <div>
      <Logo />
      <NavbarButton />
    </div>
  );
};

export default Navbar;
