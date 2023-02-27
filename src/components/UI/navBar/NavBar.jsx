import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../../../assets/mainLogo/nordic-rose.svg";
import "./../../../styles/App.css";
import "./NavBar.css";
import MenuContainer from "../menuContainer/MenuContainer";

const NavBar = () => {
  const items = [
    { value: "Blog", to: "/posts" },
    { value: "About", to: "/about" },
  ];

  return (
    <nav className="header-navbar">
      <div className="header-logo">
        <Link to="posts">
          <img src={logo} alt="Nordic Rose logo" />
        </Link>
      </div>
      <div>
        <MenuContainer items={items} />
      </div>
    </nav>
  );
};

export default NavBar;
