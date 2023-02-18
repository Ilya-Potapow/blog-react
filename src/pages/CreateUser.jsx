import React, { useContext, useState } from "react";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import { AUTH_Context } from "./../context";

import "./CreateUser.css";

const CreateUser = () => {
  const { authUsers, setAuthUser } = useContext(AUTH_Context);
  const [createUser, setCreateUser] = useState({ username: "", password: "" });
  const [isFiled, setIsFiled] = useState(true);
  const [isUniq, setIsuniq] = useState(false);
  const [visible, setVisible] = useState(false);

  const registration = (e) => {
    e.preventDefault();
    if (!createUser.username || !createUser.password) {
      setIsFiled(false);
    } else if (searchSameUser(authUsers)) {
      setCreateUser({ ...createUser, username: "" });
      setIsuniq(true);
    } else {
      authUsers.push({ ...createUser });
      // setAuthUser([...authUsers, newUser]);
      setCreateUser({ username: "", password: "" });
      localStorage.setItem("usersData", JSON.stringify(authUsers));
      window.location.replace("/login");
    }
  };
  const searchSameUser = (data) => {
    for (const i in data) {
      if (data[i].username === createUser.username) return true;
    }
  };
  const onChangeUserInput = (e) => {
    setCreateUser({ ...createUser, username: e.target.value });
    setIsuniq(false);
    setIsFiled(true);
  };
  const onChangePassInput = (e) => {
    setCreateUser({ ...createUser, password: e.target.value });
    setIsuniq(false);
    setIsFiled(true);
  };
  const showPassword = () => {
    setVisible(!visible);
  };
  const loginValidation = () => {};

  return (
    <div>
      <h1> Registration</h1>
      <form className="create_user" onSubmit={registration}>
        <Input
          autoFocus
          value={createUser.username}
          onChange={onChangeUserInput}
          type="text"
          placeholder="Type login"
        />
        <Input
          value={createUser.password}
          onChange={onChangePassInput}
          type={visible ? "text" : "password"}
          placeholder="Type password"
        ></Input>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="show">show password</label>
          <input
            style={{ width: "20px", height: "20px" }}
            id="show"
            type="checkbox"
            onChange={showPassword}
          ></input>
        </div>

        <Button> Create </Button>
      </form>
      {isFiled ? "" : <div>Username or pasword cant be empty </div>}
      {isUniq ? <div>User already exist</div> : ""}
    </div>
  );
};

export default CreateUser;
// authUsers.push({ ...createUser });
// localStorage.setItem("usersData", JSON.stringify(authUsers));
// setCreateUser({ username: "", password: "" });
