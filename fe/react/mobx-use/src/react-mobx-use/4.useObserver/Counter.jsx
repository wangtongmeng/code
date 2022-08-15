/**
 * useObserver允许您使用类似观察者的行为，但仍然允许您以任何方式优化组件（例如，使用自定义areEqual的memo，使用forwardRef等），并准确声明观察到的部分（渲染阶段）
 */

import { makeAutoObservable } from "mobx";
import { useObserver } from "mobx-react";

class Store {
  number = 0;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  add() {
    this.number++;
  }
}
const store = new Store();
export default function () {
  return useObserver(() => (
    <>
      <p>{store.number}</p>
      <button onClick={store.add}>增加</button>
    </>
  ));
}
