import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_Context } from "../../../context";
import Button from "../button/Button";

const NavBar = () => {
  const { setIsAuth } = useContext(AUTH_Context);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <nav className="navBar">
      <div className="navBar_items">
        <Link to="/posts" className="links">
          Posts
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
      </div>
      <div className="navBar_items">
        <Button onClick={logout} style={{ background: "#fff" }}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;