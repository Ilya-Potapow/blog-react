import React from "react";
import cl from "./ErrorEl.module.css";


const ErrorEl = ({ children, ...props }) => {
  return (

    <div className={cl.error_message} {...props}>
      {children}
    </div>
  );
};

export default ErrorEl;
