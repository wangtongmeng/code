import { action, computed, makeObservable, observable, autorun } from "mobx";

class Doubler {
  value;
  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    });
    this.value = value;
  }
  get double() {
    return this.value * 2;
  }
  increment() {
    this.value++;
    this.value++;
    // 这里是一个action，相当于+2 触发一次autorun回调函数的执行
  }
}

const doubler = new Doubler(1);

autorun(() => {
  console.log(doubler.value);
});

doubler.increment();

/**
 * 1
 * 3
 */
