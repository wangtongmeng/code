/**
 * 
  使用方式 when(predicate: () => boolean, effect?: () => void, options?)
  when会观察并运行给定的 predicate 函数，直到其返回 true。 一旦 predicate 返回了 true，给定的 effect 函数就会执行并且自动执行器函数将会被清理掉
  如果你没有传入 effect 函数，when 函数返回一个 Promise 类型的 disposer，并允许你手动取消
 */

import { makeAutoObservable, reaction, when } from "mobx";
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
when(
  () => doubler.value === 3,
  () => {
    console.log("value", doubler.value);
  }
);
doubler.value++;
doubler.value++;
doubler.value++;

// value 3
