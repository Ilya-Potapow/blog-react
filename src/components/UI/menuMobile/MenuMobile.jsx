import React from "react";
import LoginLogout from "../login_logout/LoginLogout";
import "./MenuMobile.css";
import { Link } from "react-router-dom";
import logo from "./../../../assets/mainLogo/nordic-rose.svg";

const MenuMobile = ({ items, setMenu, menuActive, isMobile }) => {
  const handleClick = () => {
    setMenu(false);
  };
  return (
    <div className={menuActive ? "menu active" : "menu"} onClick={handleClick}>
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__head">
          <img onClick={handleClick} src={logo} alt="" />
          <LoginLogout isMobile={isMobile} setMenu={setMenu} />
        </div>

        <ul className="menu__list-burger">
          {items.map((el) => (
            <li key={el.value}>
              <Link
                className="menu__list-burger-links"
                to={el.to}
                onClick={handleClick}
              >
                {el.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
