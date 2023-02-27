import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_Context } from "../../../context";

import ButtonMenu from "../buttonMenu/ButtonMenu";

const LoginLogout = ({ isMobile, setMenu }) => {
  const { isAuth, setIsAuth } = useContext(AUTH_Context);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  const closeMenu = (isMobile) => {
    if (!isMobile) return;
    setMenu(false);
  };
  return (
    <div onClick={() => closeMenu(isMobile)}>
      {isAuth ? (
        <ButtonMenu onClick={logout}>Logout</ButtonMenu>
      ) : (
        <Link to="/login">
          <ButtonMenu>Login</ButtonMenu>
        </Link>
      )}
    </div>
  );
};

export default LoginLogout;
