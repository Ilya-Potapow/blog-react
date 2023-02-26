import React from "react";
import LoginLogout from "../login_logout/LoginLogout";
import "./Menu.css";
import { Link } from "react-router-dom";
import logo from "./../../../assets/mainLogo/nordic-rose.svg";

const Menu = ({ header, items, setMenu, menuActive }) => {
  return (
    <div
      className={menuActive ? "menu active" : "menu"}
      onClick={() => setMenu(false)}
    >
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__head">
          <img src={logo} alt="" />
          <LoginLogout />
        </div>

        <ul className="menu__list-burger" onClick={() => setMenu(false)}>
          {items.map((el) => (
            <li key={el.value}>
              <Link
                className="menu__list-burger-links"
                to={el.to}
                onClick={() => setMenu(false)}
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

export default Menu;
