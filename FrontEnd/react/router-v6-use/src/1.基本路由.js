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
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      layout
      <Outlet />
    </>
  );
};
const Home = () => <div>home</div>;
const About = () => <div>about</div>;
const DashBoard = () => <div>dashboard</div>;
const NoMatch = () => <div>nothing</div>;

ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/nothing-here">nothing</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

/**
 *  跳转 /， Layout Home
 *  跳转 /about，Layout About
 *  跳转 /dashboard，Layout DashBoard
 *  跳转 /nothing-here，Layout nothing
 *
 */
