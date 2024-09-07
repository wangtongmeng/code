import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { useState } from "react";
import { wrapPromise } from "../utils";
import { fetchUser } from "../fakeApi";
import { startTransition } from "react";
import { useTransition } from "react";

const user1Resource = wrapPromise(fetchUser("1"));
const user5Resource = wrapPromise(fetchUser("5"));

function UseTransitionPage() {
  const [resource, setResource] = useState(user1Resource);
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Suspense fallback={<h3>Loading User...</h3>}>
        <ErrorBoundary>
          <User resource={resource} />
        </ErrorBoundary>
      </Suspense>
      <button
        onClick={() => {
          startTransition(() => {
            setResource(user5Resource);
          });
        }}
      >
        user5
      </button>
      <h3>{isPending && <p>isPending...</p>}</h3>
    </>
  );
}

function User({ resource }) {
  const user = resource.read();
  return (
    <div>
      {user.id}:{user.name}
    </div>
  );
}

export default UseTransitionPage;
