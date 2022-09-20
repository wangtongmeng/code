import DemoCss from "./style/Demo.module.css";
import React from "react";
import { Button } from "tdesign-react";
import "tdesign-react/es/style/index.css";
import LoginPwd from "./view/LoginPwd";
import LoginCode from "./view/LoginCode";
import { TransitionGroup } from "react-transition-group";

const { useState } = React;
const Demo = () => {
  const [status, setStatus] = useState("loginPwd");

  const renderButton = () => {
    if (status === "loginPwd") {
      return <Button onClick={() => setStatus("loginCode")}>验证码登录</Button>;
    } else {
      return <Button onClick={() => setStatus("loginPwd")}>密码登录</Button>;
    }
  };

  const renderTitle = () => {
    if (status === "loginPwd") {
      return <h3>密码登录</h3>;
    } else {
      return <h3>验证码登录</h3>;
    }
  };
  const renderForm = () => {
    if (status === "loginPwd") {
      return <LoginPwd />;
    } else {
      return <LoginCode />;
    }
  };

  return (
    <div className={DemoCss.wrapper}>
      <div>{renderTitle()}</div>
      <TransitionGroup>
        <div className={DemoCss.formSection}>{renderForm()}</div>
      </TransitionGroup>
      <div className={DemoCss.other}>{renderButton()}</div>
    </div>
  );
};

export default Demo;
