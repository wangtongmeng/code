import React from "react";
import { useLocation, useParams } from "../origin/react-router-dom";
import { UserAPI } from "../utils";
function UserDetail(props) {
  const [user, setUser] = React.useState({});
  let location = useLocation(); // 获取路径对象
  let params = useParams(); // 获取路径参数
  React.useEffect(() => {
    let user = location.state;
    if (!user) {
      let id = params.id;
      user = UserAPI.find(id);
    }
    if (user) setUser(user);
  }, [location.state, params.id]);
  return (
    <div>
      {user.id}

      {user.username}
    </div>
  );
}

export default UserDetail;
