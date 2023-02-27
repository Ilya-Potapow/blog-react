import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="group">
      <input className="input-form" {...props}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Input;
