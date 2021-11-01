import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function lazy(load) {
  return class extends React.Component {
    state = { InnerComponent: null };
    componentDidMount() {
      load().then((result) => {
        this.setState({ InnerComponent: result.default || result });
      });
    }
    render() {
      let { InnerComponent } = this.state;
      return InnerComponent ? <InnerComponent /> : null;
    }
  };
}
const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ "./components/Home")
);
const LazyLogin = React.lazy(() =>
  import(/* webpackChunkName: "Login" */ "./components/Login")
);
function Loading() {
  return <div>加载中......</div>;
}
function SuspenseHome() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyHome />
    </Suspense>
  );
}
function SuspenseLogin() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLogin />
    </Suspense>
  );
}
//webpack chunkFilename
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">User</Link>
        </li>
      </ul>
      <Route exact path="/" component={SuspenseHome} />
      <Route path="/login" component={SuspenseLogin} />
    </div>
  </Router>,
  document.getElementById("root")
);
