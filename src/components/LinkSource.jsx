import React from "react";
import LinkImg from "../assets/img/link-icon.png";

const LinkSource = ({ linkEventHandler, linkText }) => {
  return (
    <div>
      <p className="text-link">
        Source :{" "}
        <span onClick={linkEventHandler}>
          {linkText}
          <LinkImg className="icon" />
        </span>
      </p>
    </div>
  );
};

export default LinkSource;
