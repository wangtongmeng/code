/**
 *
 * flow.bound注解可用于将方法自动绑定到正确的实例，这样 this 会始终被正确绑定在函数内部。 与 actions 一样，flows 默认可以使用 autoBind 选项
 */

import { runInAction } from "mobx";
import { action } from "mobx";
import { flow } from "mobx";
import { computed } from "mobx";
import { makeObservable, observable, autorun } from "mobx";

class Doubler {
  value;
  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action.bound,
      fetch: flow.bound,
    });
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

autorun(() => {
  console.log(doubler.value);
});

const increment = doubler.increment;
const fetch = doubler.fetch;

increment();
fetch();

/**
 * 1
 * 3 // action中两次加操作只触发了一次autorun函数执行
 *
 * 1秒后
 *
 * 5
 */
