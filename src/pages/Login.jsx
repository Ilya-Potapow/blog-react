import React, { useContext, useState } from "react";
import Button from "../components/UI/button/Button";
import { AUTH_Context } from "../context";
import Input from "./../components/UI/input/Input";
import { authUsers } from "../users/index.js";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsAuth, authUsers } = useContext(AUTH_Context);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [correctUser, setCorrectUser] = useState("");
  const [correctPass, setCorrectPass] = useState("");

  const loginValidation = () => {
    for (let i = 0; i < authUsers.length; i++) {
      const userNameLocal = authUsers[i].username;
      const userPassLocal = authUsers[i].password;
      if (userName == userNameLocal && pass == userPassLocal) {
        setCorrectUser(true);
        setCorrectPass(true);
        setIsAuth(true);
      } else if (userName == userNameLocal) {
        setCorrectUser(true);
      } else if (pass == userPassLocal) {
        setCorrectPass(true);
      }
    }
    setCorrectPass(false);
    setCorrectUser(false);
    return;
  };

  const login = (e) => {
    e.preventDefault();
    loginValidation();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <Input
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Type login"
        />
        <Input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Type password"
        />
        <Button> Sign In </Button>
      </form>
      <div style={{ marginTop: "25px" }}>
        <h2>Firs times here?</h2>
        <Link to="/registration">
          <Button>Create new account</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
