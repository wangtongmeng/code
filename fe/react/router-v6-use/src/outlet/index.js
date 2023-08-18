import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

function Home() {
  return <div>home</div>;
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
      <Outlet />
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
      <Route path="/user" element={<User />}>
        <Route path="add" element={<UserAdd />} />
        <Route path="list" element={<UserList />} />
        <Route path="detail/:id" element={<UserDetail />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
