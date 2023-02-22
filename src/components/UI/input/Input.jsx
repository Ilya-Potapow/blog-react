import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="group">
      <input className="input-form" {...props}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className="input-label">Name</label>
    </div>
  );
};

export default Input;
