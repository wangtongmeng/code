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
function Router({ children, navigator, location }) { // 存储路由信息 navigator=history location=history.location
  return (
    <NavigationContext.Provider value={{ navigator }}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}
function useLocation() {
  return React.useContext(LocationContext).location;
}
function Routes({ children }) { // 匹配当前路由对应的路由组件
  return useRoutes(createRoutesFromChildren(children));
}
function useRoutes(routes) {
  let location = useLocation();
  let pathname = location.pathname || "/";
  for (let i = 0; i < routes.length; i++) {
    let { path, element } = routes[i];
    let match = matchPath(path, pathname);
    if (match) return element;
  }
}
/**
 * 判断此route对应的path路径和地址中的pathname是否匹配
 * @param {*} path
 * @param {*} pathname
 */
function matchPath(path, pathname) {
  let matcher = compilePath(path);
  let match = pathname.match(matcher);
  return match;
}
/**
 * 把灵境转化成正则表达式
 * @param {*} path 路径
 */
function compilePath(path) {
  let regexpSource = "^" + path + "$";
  let matcher = new RegExp(regexpSource);
  return matcher;
}
function createRoutesFromChildren(children) { // 根据route vdom数组提取 路由数组信息
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
