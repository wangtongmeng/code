import { Form, Input, Button } from "tdesign-react";
import { CSSTransition } from "react-transition-group";
import "../style/Transition.css";

const { FormItem } = Form;

const LoginPwd = () => {
  return (
    <div style={{ width: 350 }}>
      <Form colon={true} labelWidth={0}>
        {/* <CSSTransition timeout={500} classNames="show" unmountOnExit> */}
        <FormItem name="account">
          <Input clearable={true} placeholder="请输入账户名" />
        </FormItem>
        {/* </CSSTransition> */}
        <CSSTransition timeout={500} classNames="show" unmountOnExit>
          <FormItem name="password">
            <Input type="password" clearable={true} placeholder="请输入密码" />
          </FormItem>
        </CSSTransition>
        {/* <CSSTransition timeout={500} classNames="show" unmountOnExit> */}
        <FormItem>
          <Button theme="primary" type="submit" block>
            登录
          </Button>
        </FormItem>
        {/* </CSSTransition> */}
      </Form>
    </div>
  );
};

export default LoginPwd;
