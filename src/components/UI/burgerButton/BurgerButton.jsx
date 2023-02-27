import React from "react";

const BurgerButton = ({handleMenuActive}) => {
  return (
    <div className="burger-btn" onClick={handleMenuActive}>
      <span />
    </div>
  );
};

export default BurgerButton;
