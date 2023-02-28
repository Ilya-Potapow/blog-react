import React from "react";
import "./ErrorEl.css";

const ErrorEl = ({ children, ...props }) => {
  return (
    <div className="error_message" {...props}>
      {children}
    </div>
  );
};

export default ErrorEl;
