import { useState } from "react";
import UserLayout from "..";
import axios from "../../../utils/axios";
import UserInfo from "../../../components/UserInfo";
function UserDetail(props) {
  const { user } = props;
  const [show, setShow] = useState(false);
  return (
    <UserLayout>
      <p>ID: {props.user.id}</p>
      <p>ID: {props.user.name}</p>
      <button onClick={() => setShow(!show)}>显示/隐藏</button>
      {/* 组件懒加载 */}
      {show && <UserInfo user={user} />}
    </UserLayout>
  );
}

UserDetail.getInitialProps = async (ctx) => {
  let response = await axios({
    url: `/api/users/${ctx.query.id}`,
    method: "GET",
  }).then((res) => res.data);
  return { user: response.data };
};

export default UserDetail;
