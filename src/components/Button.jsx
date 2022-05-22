import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className="btn-container">
    <div className="btn btn-main">
      {props.name}
    </div>
  </div>
  );
};

export default Button;