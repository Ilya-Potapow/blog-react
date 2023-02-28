import React, { useContext, useState, useEffect } from "react";
import Button from "../../components/UI/button/Button";
import ShowPass from "../../components/UI/showPass/ShowPass";
import ErrorEl from "../../components/UI/errorHtml/ErrorEl";
import { AUTH_Context } from "../../context";
import { Email } from "../../sendMail/smtp";
import { isValidEmail } from "../../utils/emailHandler";
import "./../../components/UI/loginForm/LoginForm.css";
import { CSSTransition } from "react-transition-group";

import "./CreateUser.css";
import className from "./../../components/UI/button/Button.module.css";
import InputLogin from "../../components/UI/inputLogin/InputLogin";

const CreateUser = () => {
  const [createUser, setCreateUser] = useState({
    mail: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    isFilled: false,
    isUniqUser: false,
    isUniqMail: false,
  });
  const { authUsers, setAuthUser } = useContext(AUTH_Context);
  const [visiblePass, setVisiblePass] = useState(false);
  const [mailError, setMailError] = useState(null);
  const sendMail = () => {
    const emailBody = `
    <div style="background-color: #f5f5f5; padding: 20px;">
      <h3 style="color: #333; margin-bottom: 20px;">Welcome to our website!</h3>
      <p style="color: #777; font-size: 16px; line-height: 1.5; margin-bottom: 10px;">
        Dear ${createUser.username}, thank you for joining our website! 
        Below you will find your login information:
      </p>
      <ul style="color: #555; font-size: 16px; line-height: 1.5; margin-left: 30px; margin-bottom: 20px;">
        <li><b>Username:</b> ${createUser.username}</li>
        <li><b>Password:</b> ${createUser.password}</li>
      </ul>
      <p style="color: #777; font-size: 16px; line-height: 1.5;">
        If you have any questions or concerns, please don't hesitate to contact us. 
        We're always happy to help!
      </p>
    </div>
  `;
    Email.send({
      SecureToken: "bfc37b92-cb15-420a-b064-1974f9f56bf0",
      To: createUser.mail,
      From: "potapow.ilay22@gmail.com",
      Subject: "From FrontEnd pet project",
      Body: emailBody,
    }).then((message) => alert(message));
  };
  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(authUsers));
  }, [createUser]);
  // ====== INPUTS=====//
  const onChangeInput = (fieldName, value) => {
    setCreateUser({ ...createUser, [fieldName]: value });
    setErrors({
      isUniqUser: false,
      isUniqMail: false,
      isFilled: false,
    });
  };
  const onChangeUserInput = (e) => {
    onChangeInput("username", e.target.value);
  };
  const onChangePassInput = (e) => {
    onChangeInput("password", e.target.value);
  };
  const onChangeMailInput = (e) => {
    onChangeInput("mail", e.target.value);
    !isValidEmail(e.target.value) ? setMailError(true) : setMailError(null);
  };
  //=========== Search SAME===========//
  const searchSameField = (data, field) => {
    for (const i in data) {
      if (data[i][field] === createUser[field]) return true;
    }
  };
  // ========VALIDATE REG ===========//
  const validateReg = (e) => {
    e.preventDefault();
    if (!createUser.username || !createUser.password || !createUser.mail) {
      setErrors({ ...errors, isFilled: true });
    } else if (searchSameField(authUsers, "username")) {
      setErrors({ ...errors, isUniqUser: true });
      setCreateUser({ ...createUser, username: "" });
    } else if (searchSameField(authUsers, "mail")) {
      setErrors({ ...errors, isUniqMail: true });
      setCreateUser({ ...createUser, mail: "" });
    } else {
      regNewUser();
    }
  };
  // ========REGISTRATION========//
  const regNewUser = () => {
    sendMail();
    setAuthUser([...(authUsers || {}), createUser]);
    setCreateUser({ mail: "", username: "", password: "" });
    window.location.replace("/login");
  };

  return (
    <div className="login-container">
      <div className="login-title">Registration</div>
      <div className="form-container">
        <form className="login-form" onSubmit={validateReg}>
          <InputLogin
            autoFocus
            value={createUser.username}
            onChange={onChangeUserInput}
            type="text"
            placeholder="Type login"
          ></InputLogin>
          <InputLogin
            value={createUser.password}
            onChange={onChangePassInput}
            type={visiblePass ? "text" : "password"}
            placeholder="Type password"
          ></InputLogin>
          <InputLogin
            style={{
              borderColor: mailError && createUser.mail ? "#f05e09" : "#ddd",
            }}
            type="text"
            onChange={onChangeMailInput}
            placeholder="Enter your email "
          ></InputLogin>
          <ShowPass visiblePass={visiblePass} setVisiblePass={setVisiblePass} />
          <Button className={className.button_login}> Create </Button>
        </form>
      </div>
      <div className="error_wrapper">
        <CSSTransition
          in={errors.isFilled}
          timeout={300}
          classNames="error"
          unmountOnExit
        >
          <ErrorEl>Fields must be completed</ErrorEl>
        </CSSTransition>
        <CSSTransition
          in={errors.isUniqUser}
          timeout={300}
          classNames="error"
          unmountOnExit
        >
          <ErrorEl>User already exist</ErrorEl>
        </CSSTransition>
        <CSSTransition
          in={errors.isUniqMail}
          timeout={300}
          classNames="error"
          unmountOnExit
        >
          <ErrorEl>Mail already exist</ErrorEl>
        </CSSTransition>
      </div>
    </div>
  );
};

export default CreateUser;
