import React from "react";
import "./styles.css";

const Img = ({ overview, internal, surface}) => {
  return (
    <div className="plant-img">
      <img src={overview} alt="" className="overview"/>
      <img src={internal} alt="" className="internal"/>
      <img src={surface} alt="" className="surface"/>
    </div>
  );
};

export default Img;
