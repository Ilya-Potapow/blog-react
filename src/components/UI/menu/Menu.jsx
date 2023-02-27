import React from "react";
import { Link } from "react-router-dom";
import LoginLogout from "./../login_logout/LoginLogout";

const Menu = ({ items }) => {
  return (
    <ul className="menu__list">
      {items.map((el) => (
        <li key={el.value}>
          <Link className="menu__list-link" to={el.to}>
            {el.value}
          </Link>
        </li>
      ))}
      <LoginLogout />
    </ul>
  );
};

export default Menu;
