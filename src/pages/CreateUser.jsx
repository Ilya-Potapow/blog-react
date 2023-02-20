import React, { useContext, useState } from "react";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import { AUTH_Context } from "./../context";
import { Email } from "../sendMail/smtp";

import "./CreateUser.css";

const CreateUser = () => {
  const { authUsers, setAuthUser } = useContext(AUTH_Context);
  const [createUser, setCreateUser] = useState({
    mail: "",
    username: "",
    password: "",
  });
  const [isFiled, setIsFiled] = useState(true);
  const [isUniqUser, setIsuniqUser] = useState(true);
  const [isUniqMail, setIsuniqMail] = useState(true);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const onChangeMailInput = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError(true);
    } else {
      setError(null);
    }
    setCreateUser({ ...createUser, mail: event.target.value });
  };
  const sendMail = () => {
    const emailBody = `
    <h3>Welcome!</h3>
    <br>
    <b>Username: ${createUser.username}</b>
    <br>
    <b>Password: ${createUser.password}</b>
    <br>
    `;

    Email.send({
      SecureToken: "bfc37b92-cb15-420a-b064-1974f9f56bf0",
      To: createUser.mail,
      From: "potapow.ilay22@gmail.com",
      Subject: "From FrontEnd pet project",
      Body: emailBody,
    }).then((message) => alert(message));
  };
  const registration = (e) => {
    e.preventDefault();
    if (!createUser.username || !createUser.password || !createUser.mail) {
      setIsFiled(false);
    } else if (searchSameUser(authUsers)) {
      setCreateUser({ ...createUser, username: "" });
      setIsuniqUser(false);
    } else if (searchSameMail(authUsers)) {
      setCreateUser({ ...createUser, mail: "" });
      setIsuniqMail(false);
    } else {
      authUsers.push({ ...createUser });
      // setAuthUser([...authUsers, newUser]);
      setCreateUser({ mail: "", username: "", password: "" });
      localStorage.setItem("usersData", JSON.stringify(authUsers));
      sendMail();
      window.location.replace("/login");
    }
  };
  const searchSameMail = (data) => {
    for (const i in data) {
      if (data[i].mail === createUser.mail) return true;
    }
  };
  const searchSameUser = (data) => {
    for (const i in data) {
      if (data[i].username === createUser.username) return true;
    }
  };
  const onChangeUserInput = (e) => {
    setCreateUser({ ...createUser, username: e.target.value });
    setIsuniqUser(true);
    setIsFiled(true);
  };
  const onChangePassInput = (e) => {
    setCreateUser({ ...createUser, password: e.target.value });
    setIsuniqUser(true);
    setIsFiled(true);
  };
  const showPassword = () => {
    setVisible(!visible);
  };
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
        ></Input>
        <Input
          value={createUser.password}
          onChange={onChangePassInput}
          type={visible ? "text" : "password"}
          placeholder="Type password"
        ></Input>
        <Input
          style={{
            borderColor: error && createUser.mail ? "#f05e09" : "#636363",
          }}
          type="email"
          onChange={onChangeMailInput}
          placeholder="Enter your email "
        ></Input>
        <Button> Create </Button>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="show">show password</label>
          <input
            style={{ width: "20px", height: "20px" }}
            id="show"
            type="checkbox"
            onChange={showPassword}
          ></input>
        </div>
      </form>
      {isFiled ? "" : <div>Fields must be completed</div>}
      {isUniqUser ? "" : <div>User already exist</div>}
      {isUniqMail ? "" : <div>Mail already exist</div>}
    </div>
  );
};

export default CreateUser;
// authUsers.push({ ...createUser });
// localStorage.setItem("usersData", JSON.stringify(authUsers));
// setCreateUser({ username: "", password: "" });
/* 
[] - создать темплейт для ошибок
[] - зарбить на компоненты
[] - рефактор повторяющегося кода
*/
