import React from "react";
import "./../input/Input.css";

const TextArea = (props) => {
  return (
    <div className="group">
      <textarea
        style={{ resize: "vertical" }}
        className="input-form"
        {...props}
      ></textarea>
      <span className="highlight"></span>
      <span className="bar"></span>
      {/* <label className="input-label">Name</label> */}
    </div>
  );
};

export default TextArea;
