import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Learning", path: "/learning" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar-container">
      <ul className="navbar-button-container">
        {menuItems.map((item) => {
          console.log(item.name);

          return (
            <NavbarButton key={item.name} name={item.name} path={item.path} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
