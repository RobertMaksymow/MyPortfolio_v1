import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header-logo-container">
      <Link to={"/"} className="header-logo-link">
        <p className="header-logo">R. A. Maksymow</p>
      </Link>
    </div>
  );
};

export default Logo;
