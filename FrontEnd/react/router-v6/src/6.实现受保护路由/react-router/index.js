import React from "react";
const NavigationContext = React.createContext();
const LocationContext = React.createContext();
const RouteContext = React.createContext();

/**
 *
 * @param {*} children 儿子
 * @param {*} navigator 历史对象，其实就是history
 * @param {*} location 地址对象，{pathname: "当前路径"}
 * @returns
 */
function Router({ children, navigator, location }) {
  return (
    <NavigationContext.Provider value={{ navigator }}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}
export function useLocation() {
  return React.useContext(LocationContext).location;
}
function Routes({ children }) {
  return useRoutes(createRoutesFromChildren(children));
}
function useRoutes(routes) {
  let location = useLocation();
  let pathname = location.pathname || "/";
  for (let i = 0; i < routes.length; i++) {
    let { path, element } = routes[i];
    let match = matchPath(path, pathname);
    // 把match作为属性给element
    if (match) return React.cloneElement(element, { ...element.props, match });
  }
}
/**
 * 判断此route对应的path路径和地址中的pathname是否匹配
 * @param {*} path
 * @param {*} pathname
 */
function matchPath(path, pathname) {
  let [matcher, paramNames] = compilePath(path);
  let match = pathname.match(matcher);
  if (!match) return null;
  // match ['/post/100/200', 100, 200]
  let matchedPathname = match[0]; // 匹配到的路径
  let values = match.slice(1); // 分组的值，也就是路径参数的数组
  let params = paramNames.reduce((memo, paramName, index) => {
    memo[paramName] = values[index];
    return memo;
  }, {});
  return { params, pathname: matchedPathname, path };
}
/**
 * 把灵境转化成正则表达式
 * @param {*} path 路径
 */
function compilePath(path) {
  let paramNames = [];
  let regexpSource =
    "^" +
    path.replace(/:(\w+)/g, (_, key) => {
      paramNames.push(key);
      return "([^\\/]+)"; // 一个匹配非/的分组
    });
  regexpSource += "$";
  let matcher = new RegExp(regexpSource);
  return [matcher, paramNames];
}
function createRoutesFromChildren(children) {
  let routes = [];
  React.Children.forEach(children, (child) => {
    let route = {
      path: child.props.path, // 代表Route的路径
      element: child.props.element, // 代表此Route要渲染的元素
    };
    routes.push(route);
  });
  return routes;
}
function Route(props) {}
export { Router, Routes, Route };

export function useNavigate() {
  let { navigator } = React.useContext(NavigationContext);
  let navigate = React.useCallback(
    (to) => {
      navigator.push(to);
    },
    [navigator]
  );
  return navigate;
}
