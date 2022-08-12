import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Store {
  number = 0;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  add() {
    this.number++;
  }
}

let store = new Store();

export default observer(function () {
  return (
    <div>
      <p>{store.number}</p>
      <button onClick={store.add}>增加</button>
    </div>
  );
});
