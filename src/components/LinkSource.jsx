import React from "react";

const LinkSource = ({ linkEventHandler, linkText }) => {
  return (
    <div>
      <p className="text-link">
        Source :{" "}
        <span onClick={linkEventHandler}>
          {linkText}
        </span>
      </p>
    </div>
  );
};

export default LinkSource;
