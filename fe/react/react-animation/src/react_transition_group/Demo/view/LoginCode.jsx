import { Form, Input, Button } from "tdesign-react";
const { FormItem } = Form;
const LoginCode = () => {
  return (
    <div style={{ width: 350 }}>
      <Form colon={true} labelWidth={0}>
        <FormItem name="account">
          <Input clearable={true} placeholder="请输入账户名" />
        </FormItem>
        <FormItem>
          <Button theme="primary" type="submit" block>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default LoginCode;
