import React from "react";
import { Router } from "../react-router";
import { createBrowserHistory, createHashHistory } from "../history";
import { useNavigate, useLocation } from "../react-router";
export * from "../react-router";
function BrowserRouter({ children }) {
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory();
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      children={children}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    />
  );
}
function HashRouter({ children }) {
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory();
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  // React.useLayoutEffect(() => history.listen(setState), [history]);
  React.useLayoutEffect(
    () =>
      history.listen(({ location, action }) => {
        setState({ location, action });
      }),
    [history]
  );
  return (
    <Router
      children={children}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    />
  );
}
export { BrowserRouter, HashRouter };

export function Link({ to, ...rest }) {
  let navigate = useNavigate(); // navigate = history
  function handleClick(event) {
    event.preventDefault();
    navigate(to);
  }
  return <a {...rest} href={to} onClick={handleClick}></a>;
}

export function NavLink({
  className: classNameProp = "", // ；类名，可能是一个字符串，也可能是一个函数
  end = false, // 是否结束 end=true类似于exact
  style: styleProp = {}, // 样式，可能是一个对象，也可能是一个函数
  to, // 跳转到哪里
  children, // 儿子
  ...rest
}) {
  let location = useLocation();
  // 当前地址栏中的路径
  let pathname = location.pathname;
  // 如果pathname和to完全相等 isActive=true
  // 如果end=false，并且pathname是以to开头的 pathname=/user/add to=/user  /users这种不行
  let isActive =
    pathname === to ||
    (!end && pathname.startsWith(to) && pathname.charAt(to.length) === "/");
  let className =
    typeof classNameProp === "function"
      ? classNameProp({ isActive })
      : classNameProp;
  let style =
    typeof styleProp === "function" ? styleProp({ isActive }) : styleProp;
  return (
    <Link {...rest} className={className} style={style} to={to}>
      {children}
    </Link>
  );
}
