import React, { useContext, useState } from "react";
import { AUTH_Context } from "./../../context";
import Button from "../../components/UI/button/Button";
import { Link } from "react-router-dom";
import "./Login.css";
import cl from "./../../components/UI/button/Button.module.css";
import LoginForm from "../../components/UI/loginForm/LoginForm";

const Login = () => {
  const { setIsAuth, authUsers } = useContext(AUTH_Context);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ user: false, password: false });
  const [userBG, setUserBG] = useState("#fff");
  const [passwordBG, setpasswordBG] = useState("#fff");

  const loginValidation = () => {
    const foundUser = authUsers.find(
      (user) => user.username === userName && user.password === pass
    );
    if (foundUser) {
      setError({ user: false, password: false });
      setUserBG("fff");
      setpasswordBG("#fff");
      return true;
    } else {
      const userError = authUsers.some((user) => user.username === userName);
      const passwordError = authUsers.some((user) => user.password === pass);
      setError({ user: userError, password: passwordError });
      setUserBG(userError ? "#fff" : "#ee14141c");
      setpasswordBG(passwordError ? "#fff" : "#ee14141c");
      return false;
    }
  }
  const login = (e) => {
    e.preventDefault();
    if (loginValidation()) {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">Login</div>
      <div className="form-container">
        <LoginForm
          login={login}
          userBG={userBG}
          passwordBG={passwordBG}
          setUserName={setUserName}
          setPass={setPass}
          userName={userName}
          pass={pass}
        ></LoginForm>
        <div className="reg-container">
          <div className="reg-title">New user?</div>
          <Link to="/registration">
            <Button className={cl.button_login}>Create new account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
