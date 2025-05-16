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
      {menuItems.map((item) => {
        console.log(item.name);

        return (
          // eslint-disable-next-line react/jsx-key
          <NavbarButton key={item.name} name={item.name} path={item.path} />
          // <p key={item.name}>{item.name}</p>
        );
      })}
    </nav>
  );
};

export default Navbar;
