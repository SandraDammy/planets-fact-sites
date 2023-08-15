import React from "react";
import LinkIcon  from "../assets/img/icon-source.svg"

const LinkSource = ({ linkEventHandler, linkText }) => {
  return (
    <div>
      <p className="text-link">
        Source : <span onClick={linkEventHandler}>{linkText}</span>
        <img src={LinkIcon} alt="" className="icon"/>
      </p>
    </div>
  );
};

export default LinkSource;
