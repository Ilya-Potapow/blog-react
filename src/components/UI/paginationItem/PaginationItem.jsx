import React from "react";
import "./PaginationItem.css";

const PaginationItem = ({ children, ...props }) => {
  return (
    <div className="page" {...props}>
      {children}
    </div>
  );
};

export default PaginationItem;
