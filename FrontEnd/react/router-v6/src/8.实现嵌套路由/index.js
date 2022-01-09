import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  // } from "./react-router-dom";
} from "./origin/react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import UserDetail from "./components/UserDetail";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Protected from "./components/Protected";
import Login from "./components/Login";
const activeStyle = { backgroundColor: "red" };
ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          首页
        </NavLink>
      </li>
      <li>
        <NavLink to="/user">用户管理</NavLink>
      </li>
      <li>
        <NavLink to="/profile">个人中心</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home name="lisi" />} />
      <Route path="/user/*" element={<User />}>
        {/* 相对路径 */}
        <Route path="add" element={<UserAdd />} />
        <Route path="list" element={<UserList />} />
        <Route path="detail/:id" element={<UserDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={<Protected component={Profile} path={"/profile"} />}
      />
      <Route path="/post/:id/:num" element={<Post />} />
      {/* /*还没实现 */}
      <Route path="/home" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
