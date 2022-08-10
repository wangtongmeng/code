import React from "react";
import { Router } from "../react-router";
import { createBrowserHistory, createHashHistory } from "history";
export * from "../react-router";
function BrowserRouter({ children }) { // 监听history，history发生变化，更新 history action location，将最新的路由信息传给Router
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory();
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  React.useLayoutEffect(() => history.listen(setState), [history]); // 监听history变化
  return (
    <Router
      children={children}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    />
  );
}
function HashRouter({children}) {
    let historyRef = React.useRef();
  if (historyRef.current === null) {
    historyRef.current = createHashHistory();
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
export { BrowserRouter, HashRouter };
