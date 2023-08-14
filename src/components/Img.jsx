import React from "react";

const Img = ({ classImg, planet }) => {
  return (
    <div>
      <div className={classImg}>{planet}</div>
    </div>
  );
};

export default Img;
