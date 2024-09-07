import { Component, Suspense } from "react";
import { fetchUser } from "../fakeApi";
import { wrapPromise } from "../utils";
// import ErrorBoundary from "../components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
const userPromise = fetchUser("1");
const userResource = wrapPromise(userPromise);

function User() {
  const user = userResource.read();
  return (
    <div>
      {user.id}: {user.name}
    </div>
  );
}

class SuspensePage extends Component {
  render() {
    return (
      <Suspense fallback={<h3>Loading User...</h3>}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <User />
        </ErrorBoundary>
      </Suspense>
    );
  }
}

export default SuspensePage;
