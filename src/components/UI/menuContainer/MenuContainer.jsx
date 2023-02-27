import React, { useState } from "react";
import Menu from "./../menu/Menu";
import BurgerButton from "./../burgerButton/BurgerButton";
import MenuMobile from "../menuMobile/MenuMobile";
import { useViewport } from "./../../../hooks/useVievport";

const MenuContainer = ({ items }) => {
  const { width } = useViewport();
  const breakpoint = 768;
  const [menuActive, setMenuActive] = useState(false);
  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };
  const isMobile = width < breakpoint;

  return (
    <div>
      {width > breakpoint ? (
        <Menu items={items} />
      ) : (
        <BurgerButton handleMenuActive={handleMenuActive} />
      )}

      <MenuMobile
        isMobile={isMobile}
        menuActive={menuActive}
        setMenu={setMenuActive}
        header={"Menu"}
        items={items}
      ></MenuMobile>
    </div>
  );
};

export default MenuContainer;
