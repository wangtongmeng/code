import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";
import React from "react";

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

@observer // 和用observer包起来是一样的
export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{store.number}</p>
        <button onClick={store.add}>增加</button>
      </div>
    );
  }
}
