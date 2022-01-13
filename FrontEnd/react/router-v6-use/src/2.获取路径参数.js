/**
 * index 相当于 exact，精确匹配
 */
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams
} from "react-router-dom";

const Home = () => <div>home</div>;
const User = () => <div>user</div>;
const UserList = () => <div>userList</div>;
const UserDetail = () => {
  let {id} = useParams();
  return (
    <div>UserDetail {id}</div>
  )
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
        <Route path="list" element ={<UserList />} />
        <Route path="detail/:userId" element ={<UserDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);