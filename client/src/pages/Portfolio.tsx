import {} from "react";
import CardApp from "../components/CardApp";
import "../css/CardApp.css";

const Portfolio = () => {
  return (
    <div>
      This is Portfolio page
      <div className="cards">
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
      </div>
    </div>
  );
};

export default Portfolio;
