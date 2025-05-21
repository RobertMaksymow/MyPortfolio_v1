import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="navbar-logo-container">
      <Link to={"/"}>R.A. Maksymow</Link>
    </div>
  );
};

export default Logo;
