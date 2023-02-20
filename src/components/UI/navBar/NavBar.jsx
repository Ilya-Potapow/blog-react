import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useViewport } from "./../../../hooks/useVievport";
import Menu from "../menu/Menu";
import logo from "./../../../assets/mainLogo/nordic-rose.svg";
import "./../../../styles/App.css";
import "./NavBar.css";

const NavBar = () => {
  const items = [
    { value: "Main", to: "/posts" },
    { value: "About", to: "/about" },
    { value: "Contacts", to: "/about" },
  ];

  const [menuActive, setMenuActive] = useState(false);
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <nav className="header-navbar">
      <div className="header-logo">
        <Link to="/posts">
          <img src={logo} alt="Nordic Rose logo" />
        </Link>
      </div>

      <div>
        {width > breakpoint ? (
          <ul style={{ display: "flex", gap: "15px" }}>
            {items.map((el) => (
              <li key={el.value}>
                <Link to={el.to}>{el.value}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <div
              className="burger-btn"
              onClick={() => setMenuActive(!menuActive)}
            >
              <span />
            </div>
            <Menu
              menuActive={menuActive}
              setMenu={setMenuActive}
              header={"Menu"}
              items={items}
            ></Menu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
