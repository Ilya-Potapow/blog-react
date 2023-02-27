import React from "react";
import InputLogin from "../inputLogin/InputLogin";
import Button from "../button/Button";
import cl from "./../button/Button.module.css";
import "./LoginForm.css"

const LoginForm = ({
  login,
  userBG,
  passwordBG,
  setUserName,
  setPass,
  userName,
  pass,
}) => {
  return (
    <form className="login-form" onSubmit={login}>
      <InputLogin
        style={{ backgroundColor: userBG }}
        autoFocus
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Type login"
      />
      <InputLogin
        style={{ backgroundColor: passwordBG }}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Type password"
      />
      <Button className={cl.button_login}> Sign In </Button>
    </form>
  );
};

export default LoginForm;
