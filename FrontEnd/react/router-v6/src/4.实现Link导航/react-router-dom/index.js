import React from "react";
import { Router } from "../react-router";
import { createBrowserHistory, createHashHistory } from "../history";
import {useNavigate} from '../react-router'
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
  React.useLayoutEffect(() => history.listen(({ location, action }) => {
    setState({ location, action })
  }), [history]);
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
  let navigate = useNavigate() // navigate = history
  function handleClick(event) {
    event.preventDefault()
    navigate(to)
  }
  return (
    <a {...rest} href={to} onClick={handleClick}></a>
  )
}
