import React from "react";
import "./Input.css";

const Input = (props) => {
  return <input type="text" placeholder={props.placeholder}></input>;
};

export default Input;
