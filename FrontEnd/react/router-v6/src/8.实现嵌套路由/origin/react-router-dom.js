import * as React from "react";
import { createBrowserHistory, createHashHistory, createPath } from "history";
import { MemoryRouter, Navigate, Outlet, Route, Router, Routes, createRoutesFromChildren, generatePath, matchRoutes, matchPath, resolvePath, renderMatches, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useParams, useResolvedPath, useRoutes, useOutletContext } from "./react-router";
export { MemoryRouter, Navigate, Outlet, Route, Router, Routes, createRoutesFromChildren, generatePath, matchRoutes, matchPath, renderMatches, resolvePath, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useParams, useResolvedPath, useRoutes, useOutletContext };
export { UNSAFE_NavigationContext, UNSAFE_LocationContext, UNSAFE_RouteContext } from "./react-router";
export function BrowserRouter({
  basename,
  children,
  window
}) {
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={history} />;
}
export function HashRouter({
  basename,
  children,
  window
}) {
  let historyRef = React.useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={history} />;
}

function HistoryRouter({
  basename,
  children,
  history
}) {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={history} />;
}

export { HistoryRouter as unstable_HistoryRouter };

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export const Link = React.forwardRef(function LinkWithRef({
  onClick,
  reloadDocument,
  replace = false,
  state,
  target,
  to,
  ...rest
}, ref) {
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return <a {...rest} href={href} onClick={handleClick} ref={ref} target={target} />;
});
export const NavLink = React.forwardRef(function NavLinkWithRef({
  "aria-current": ariaCurrentProp = "page",
  caseSensitive = false,
  className: classNameProp = "",
  end = false,
  style: styleProp,
  to,
  children,
  ...rest
}, ref) {
  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || (!end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return <Link {...rest} aria-current={ariaCurrent} className={className} ref={ref} style={style} to={to}>
    {typeof children === "function" ? children({
      isActive
    }) : children}
  </Link>;
});
export function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return React.useCallback(event => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
export function useSearchParams(defaultInit) {
  let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = React.useMemo(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = React.useCallback((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}
export function createSearchParams(init = "") {
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}