import React, { useContext, useState } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import ShowPass from "../../components/UI/showPass/ShowPass";
import ErrorEl from "../../components/UI/errorHtml/ErrorEl";
import { AUTH_Context } from "../../context";
import { Email } from "../../sendMail/smtp";
import { isValidEmail } from "../../utils/emailHandler";

import cl from "./CreateUser.module.css";

const CreateUser = () => {
  const [createUser, setCreateUser] = useState({
    mail: "",
    username: "",
    password: "",
  });
  const { authUsers, setAuthUser } = useContext(AUTH_Context);
  const [isFiled, setIsFiled] = useState(true);
  const [isUniqUser, setIsuniqUser] = useState(true);
  const [isUniqMail, setIsuniqMail] = useState(true);
  const [visiblePass, setVisiblePass] = useState(false);
  const [error, setError] = useState(null);

  const validateReg = (e) => {
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
      regNewUser();
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
  const onChangeMailInput = (event) => {
    !isValidEmail(event.target.value) ? setError(true) : setError(null);
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
  const showPassword = () => {
    setVisiblePass(!visiblePass);
  };
  const regNewUser = () => {
    authUsers.push({ ...createUser });
    // setAuthUser([...authUsers, newUser]);
    setCreateUser({ mail: "", username: "", password: "" });
    localStorage.setItem("usersData", JSON.stringify(authUsers));
    sendMail();
    window.location.replace("/login");
  };

  return (
    <div>
      <h1> Registration</h1>
      <form className="create_user" onSubmit={validateReg}>
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
          type={visiblePass ? "text" : "password"}
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
        <ShowPass passHandler={showPassword} />
      </form>
      <div className={cl.error_wrapper}>
        {isUniqUser ? "" : <ErrorEl>User already exist</ErrorEl>}
        {isUniqMail ? "" : <ErrorEl>Mail already exist</ErrorEl>}
        {isFiled ? "" : <ErrorEl>Fields must be completed</ErrorEl>}
      </div>
    </div>
  );
};

export default CreateUser;
