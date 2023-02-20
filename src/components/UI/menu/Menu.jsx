import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_Context } from "../../../context";
import "./Menu.css";
import Button from "../button/Button";

const Menu = ({ header, items, setMenu, menuActive }) => {
  const { isAuth, setIsAuth } = useContext(AUTH_Context);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div
      className={menuActive ? "menu active" : "menu"}
      onClick={() => setMenu(false)}
    >
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__title">{header}</div>
        <ul>
          {items.map((el) => (
            <li key={el.value}>
              <Link to={el.to} onClick={() => setMenu(false)}>
                {el.value}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "100px" }} onClick={() => setMenu(false)}>
          {isAuth ? (
            <Button onClick={logout} style={{ background: "#fff" }}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button style={{ background: "#fff" }}>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
