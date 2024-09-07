import React, { startTransition, useEffect } from "react";
import { flushSync } from "react-dom";
function UpdatePriorityPage() {
  let [state, setState] = React.useState("");
  useEffect(() => {
    console.log(state);
  });
  const update = () => {
    // flushSync(() => startTransition(() => setState((state) => state + "A")));
    // flushSync(setState((state) => state + "B"));
    // flushSync(() => startTransition(() => setState((state) => state + "C")));
    // flushSync(setState((state) => state + "D"));
    startTransition(() => setState((state) => state + "A"));
    setState((state) => state + "B");
    startTransition(() => setState((state) => state + "C"));
    setState((state) => state + "D");
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={update}>更新</button>
    </>
  );
}
export default UpdatePriorityPage;
