import React, { useContext, useState } from "react";
import { AUTH_Context } from "./../../context";

import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { setIsAuth, authUsers } = useContext(AUTH_Context);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ user: false, password: false });

  const loginValidation = () => {
    for (let i = 0; i < authUsers.length; i++) {
      const userNameLocal = authUsers[i].username;
      const userPassLocal = authUsers[i].password;
      if (userName === userNameLocal && pass === userPassLocal) {
        setError({ ...error, user: false, password: false });
        return true;
      } else if (userName === userNameLocal) {
        setError({ ...error, user: false, password: true });
        return;
      } else if (pass === userPassLocal) {
        setError({ ...error, user: true, password: false });
        return;
      }
      setError({ ...error, user: true, password: true });
    }
    return false;
  };

  const login = (e) => {
    e.preventDefault();
    if (loginValidation()) {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
      // window.location.replace("/posts");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <Input
          style={{
            borderColor: error.user ? "#f05e09" : "#636363",
          }}
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Type login"
        />
        <Input
          style={{
            borderColor: error.password ? "#f05e09" : "#636363",
          }}
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
