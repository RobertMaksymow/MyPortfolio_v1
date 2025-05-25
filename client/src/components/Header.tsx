import {} from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header-container">
      <div className="hamburger">☰</div>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
