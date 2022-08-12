/**
 * 
flow 包装器是一个可选的 async / await 替代方案，它让 MobX action 使用起来更加容易
flow 将一个 generator 函数 作为唯一输入。 在 generator 内部，你可以使用 yield 串联 Promise（使用 yield somePromise 代替 await somePromise）。 flow 机制将会确保 generator 在 Promise resolve 之后继续运行或者抛出错误。
所以 flow 是 async / await 的一个替代方案，不需要再用 action 进行包装。它可以按照下面的方式使用：
  使用 flow 包装你的异步函数
  使用 function * 代替 async
  使用 yield 代替 await
 */

import { makeObservable, observable, autorun, action, computed } from "mobx";

class Doubler {
  value;
  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
      fetch: flow,
    }); // 添加注解
    this.value = value;
  }
  get double() {
    return this.value * 2;
  }
  increment() {
    this.value++;
    this.value++;
  }
  // 使用flow
  *fetch() {
    const response = yield new Promise((resolve) =>
      setTimeout(() => resolve(5), 1000)
    );
    this.value = response;
  }
}

const doubler = new Doubler(1);

autorun(() => {
  console.log(doubler.value);
});

// doubler.increment();
doubler.fetch();

/**
 * 1
 *
 * 1秒后
 *
 * 5
 */
