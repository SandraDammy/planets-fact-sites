import React from "react";
import linkImg  from '../assets/img/link-square.png'

const LinkSource = ({ linkEventHandler, linkText}) => {
  return (
    <div>
      <p className="text-link">
        Source : <span onClick={linkEventHandler}>{linkText}<linkImg/></span>
      </p>
    </div>
  );
};

export default LinkSource;
