import router from "next/router";
import { useRef } from "react";
import axios from "../utils/axios";

function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    let user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    let response = await axios.post("/api/login", user).then((res) => res.data);
    if (response.code === 0) {
      router.push("/");
    } else {
      alert("登录失败");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      用户名：
      <input ref={nameRef} />
      密码：
      <input type="password" ref={passwordRef} />
      <button type="submit">登录</button>
    </form>
  );
}

export default Login;
