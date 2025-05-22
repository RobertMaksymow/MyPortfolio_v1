import React from "react";
import "../css/Home.css";
import img from "../assets/img/stock.jpg";
import img2 from "../assets/img/stock2.jpg";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>This is the home page content.</p>
      <picture>
        <source
          media="(min-width: 40em)"
          srcSet={img}
          type="image/webp"
          width={"1500px"}
          height={"760px"}
        />
        <img src={img2} alt="people" width={"630"} height={"656"} />
      </picture>
    </div>
  );
};

export default Home;
