import { useObserver } from "mobx-react";
import { useLocalObservable } from "mobx-react";

export default function () {
  const store = useLocalObservable(() => ({
    number: 1,
    add() {
      this.number++;
    },
  }));
  return useObserver(() => (
    <>
      <p>{store.number}</p>
      <button onClick={store.add}>+</button>
    </>
  ));
}
