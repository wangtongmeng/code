/**
使用方式 runInAction(fn)
使用runInAction来创建一个会被立即调用的临时 action。在异步进程中非常有用
 */
import { makeAutoObservable, reaction, when, autorun, runInAction } from "mobx";
class Doubler {
  PI = 3.14;
  value;
  constructor(value) {
    makeAutoObservable(this, { PI: false }, { autoBind: true });
    this.value = value;
  }
  get double() {
    return this.value * 2;
  }
  increment() {
    this.value++;
    this.value++;
  }
  *fetch() {
    const response = yield new Promise((resolve) =>
      setTimeout(() => resolve(5), 1000)
    );
    this.value = response;
  }
}
const doubler = new Doubler(1);
autorun(() => console.log(doubler.value));
// 当做一个action来执行
runInAction(() => {
  doubler.value++;
  doubler.value++;
  doubler.value++;
});

// 1
// 4
