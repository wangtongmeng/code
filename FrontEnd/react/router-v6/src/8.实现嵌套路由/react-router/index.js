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
// export function useParams() {
//   let { matches } = React.useContext(RouteContext);
//   let routeMatch = matches[matches.length - 1];
//   return routeMatch ? routeMatch.params : {};
// }
function Routes({ children }) {
  return useRoutes(createRoutesFromChildren(children));
}
// 自定义hooks 渲染routes
function useRoutes(routes) {
  let location = useLocation();
  let pathname = location.pathname || "/";
  // 把routes和pathname进行匹配
  let matches = matchRoutes(routes, { pathname });
  console.log(matches);
  return null;
}
function matchRoutes(routes, location) {
  // 获取当前地址的路径名
  let pathname = location.pathname || "/";
  // 打平所有的分支 把路由进行展开
  let branches = flattenRoutes(routes);
  console.log(branches);
}
/**
 * 把路由展开
 * @param {*} routes 路由数组
 * @param {*} branches 分支数组
 * @param {*} parentMeta 父meta数组
 * @param {*} parentPath 父路径字符串
 */
function flattenRoutes(
  routes,
  branches = [],
  parentMeta = [],
  parentPath = ""
) {
  routes.forEach((route) => {
    let meta = {
      relativePath: route.path || "", // 相对路径 /user/*
      route,
    };
    let path = joinPaths([parentPath, meta.relativePath]); // /user/*
    let routesMeta = parentMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      // 自己的routesMeta成为儿子们的parentsMeta，自己的path会成为儿子们的parentPath
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    branches.push({
      path,
      routesMeta,
    });
  });
  return branches;
}
function joinPaths(paths) {
  return paths.join("/").replace(/\/\/+/g, "/"); // 用/连接，并把多个//的换成一个/
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
/**
 * 把Route组件的儿子们变成routes数组，如果路由有子元素，也要递归处理
 * @param {*} children
 * @returns
 */
function createRoutesFromChildren(children) {
  let routes = [];
  React.Children.forEach(children, (child) => {
    let route = {
      path: child.props.path, // 代表Route的路径
      element: child.props.element, // 代表此Route要渲染的元素
    };
    if (child.props.children) {
      route.children = createRoutesFromChildren(child.props.children);
    }
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

export function Navigate({ to }) {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate(to);
  });
  return null;
}
