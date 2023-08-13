import { useState } from "react";

function UserInfo(props) {
  const { user } = props;
  const [created, setCreated] = useState(props.user.created);
  async function changeFormat() {
    let moment = await import("moment");
    setCreated(moment.default(user.created).fromNow());
  }

  return (
    <div>
      <p>用户名：{user.name}</p>
      <p>
        创建时间：{created}
        <button onClick={changeFormat}>切换为相对时间</button>
      </p>
    </div>
  );
}

export default UserInfo;
