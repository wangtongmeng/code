import UserLayout from ".";
import React from "react";
import axios from "../../utils/axios";
import router from "next/router";

function UserAdd(props) {
  const nameRef = React.useRef();
  const passwordRef = React.useRef();
  const onSubmit = async (event) => {
    event.preventDefault();
    let user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };

    let response = await axios
      .post("/api/register", user)
      .then((res) => res.data);
    console.log("res", response);
    if (response.code === 0) {
      router.push("/user/list");
    } else {
      alert("添加用户失败");
    }
  };
  return (
    <UserLayout>
      <form onSubmit={onSubmit}>
        用户名：
        <input ref={nameRef} />
        密码：
        <input type="password" ref={passwordRef} />
        <button type="submit">添加</button>
      </form>
    </UserLayout>
  );
}

export default UserAdd;
