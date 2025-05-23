import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header-logo-container">
      <Link to={"/"}>
        <p>R. A. Maksymow</p>
      </Link>
    </div>
  );
};

export default Logo;
