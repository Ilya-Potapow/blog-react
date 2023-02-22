import React, { useContext } from "react";
import { AUTH_Context } from "../../../context";
import { Link } from "react-router-dom";

import ButtonMenu from "../buttonMenu/ButtonMenu";

const LoginLogout = () => {
  const { isAuth, setIsAuth } = useContext(AUTH_Context);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div>
      {isAuth ? (
        <Link onClick={logout}>
          <ButtonMenu>Logout</ButtonMenu>
        </Link>
      ) : (
        <Link to="/login">
          <ButtonMenu>Login</ButtonMenu>
        </Link>
      )}
    </div>
  );
};

export default LoginLogout;
