import React from "react";
import "./styles.css";

const Img = ({ overview, internal, surface, activeImage }) => {
  console.log("Active Image:", activeImage);
  return (
    <div className="plant-img">
      <img
        src={overview}
        alt=""
        className={`overview ${activeImage === "overview" ? "active" : ""}`}      
      />
      <img
        src={internal}
        alt=""
        className={`internal ${activeImage === "internal" ? "active" : ""}`}
      />
      <img
        src={surface}
        alt=""
        className={`surface ${activeImage === "surface" ? "active" : ""}`}
      />
    </div>
  );
};

export default Img;
