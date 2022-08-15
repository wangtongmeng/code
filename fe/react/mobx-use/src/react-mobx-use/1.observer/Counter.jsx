/**
 * 
使用observer<P>(baseComponent: FunctionComponent<P>): FunctionComponent<P>
将React组件、React类组件或独立渲染函数转换为React组件的函数。转换后的组件将跟踪其有效渲染使用的观察值，并在其中一个值更改时自动重新渲染组件
React.memo自动应用于提供给观察者的功能组件
当使用React类组件时，this.props和this.state变得可观察，因此组件将对渲染使用的属性和状态的所有更改作出反应

 */

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
