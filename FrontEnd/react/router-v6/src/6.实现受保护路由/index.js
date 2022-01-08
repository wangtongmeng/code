import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Post from "./components/Post";
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
      <Route path="/" element={<Home name="lisi" />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/post/:id/:num" element={<Post />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
