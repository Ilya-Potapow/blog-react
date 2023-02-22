import React from "react";
import cl from "./ButtonMenu.module.css";

const ButtonMenu = ({ children, ...props }) => {
  return (
    <button className={cl.button_default} {...props}>
      {children}
    </button>
  );
};

export default ButtonMenu;
