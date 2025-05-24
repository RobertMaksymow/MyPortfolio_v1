import React from "react";
import img from "../assets/img/guy.jpg";

const CardApp = () => {
  return (
    <div className="card-app">
      <h2>Card-App</h2>
      <picture>
        <img src={img} alt="Description of image" />
      </picture>
      <p>
        This is the Card-App component. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Explicabo nihil minima ex minus illum obcaecati id
        tenetur excepturi magnam, facilis asperiores voluptate reiciendis
        assumenda, fuga sunt quisquam possimus quo amet.
      </p>
    </div>
  );
};

export default CardApp;
