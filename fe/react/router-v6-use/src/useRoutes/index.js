import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Outlet,
  useRoutes,
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
function NotFound() {
  return <div>NotFound</div>;
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

const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  {
    path: "user",
    element: <User />,
    children: [
      { path: "add", element: <UserAdd /> },
      { path: "list", element: <UserList /> },
      { path: "detail/:id", element: <UserDetail /> },
    ],
  },
  // 404找不到
  { path: "*", element: <NotFound /> },
];

// useRoutes钩子在功能上等同于Routes，但它使用JavaScript对象而不是Route元素来定义路由
// 这些对象与普通Route元素具有相同的属性，但它们不需要JSX
const App = () => useRoutes(routes);

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
    <App />
  </Router>,
  document.getElementById("root")
);
