import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      home
      <button onClick={() => navigate("/user")}>跳转到/user</button>
    </div>
  );
}

function UserAdd() {
  return <div>UserAdd</div>;
}
function UserList() {
  return <div>UserList</div>;
}
function UserDetail() {
  return <div>UserDetail</div>;
}

function User() {
  return (
    <div>
      <ul>
        <li>
          <Link to="add">添加用户</Link>
        </li>
        <li>
          <Link to="list">用户列表</Link>
        </li>
      </ul>
      <Routes>
        <Route path="add" element={<UserAdd />} />
        <Route path="list" element={<UserList />} />
        <Route path="detail/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

function Profile() {
  return <div>profile</div>;
}

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/profile" element={<Profile />} />
      {/* 
        Redirect 标签删除
      解决方案：新版的路由需要引入标签
Navigate元素在渲染时更改当前位置 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
