import React, { useContext } from "react";
import Button from "../components/UI/button/Button";
import { AUTH_Context } from "../context";
import Input from "./../components/UI/input/Input";

const Login = () => {
  const { setIsAuth } = useContext(AUTH_Context);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <Input type="text" placeholder="Type login" />
        <Input type="password" placeholder="Type password" />
        <Button> Login </Button>
      </form>
    </div>
  );
};

export default Login;
