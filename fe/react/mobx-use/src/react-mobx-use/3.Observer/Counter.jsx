/**
使用 <Observer>{renderFn}</Observer>
Observer是一个React组件，它将观察者应用于组件中的匿名区域。它将单个无参数函数作为子函数，该函数应只返回一个React组件。将跟踪函数中的渲染，并在需要时自动重新渲染
 */
import { makeAutoObservable } from "mobx";
import { Observer } from "mobx-react";
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

export default function () {
  // 更加精细
  return (
    <Observer>
      {() => (
        <div>
          <p>{store.number}</p>
          <button onClick={store.add}>增加</button>
        </div>
      )}
    </Observer>
  );
}
