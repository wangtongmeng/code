import { Link, Outlet } from "../origin/react-router-dom";
function User(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/user/list">用户列表</Link>
        </li>
        <li>
          <Link to="/user/add">新增用户</Link>
        </li>
      </ul>
      <div>
        {/* 相当于vue中的 router-view */}
        <Outlet />
      </div>
    </div>
  );
}

export default User;
