import { Navigate } from "../origin/react-router";
function Protected(props) {
  let { component: RouteComponent, path } = props;
  return localStorage.getItem("login") ? (
    <RouteComponent />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}

export default Protected;
