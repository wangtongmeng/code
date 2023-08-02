/**
 * 
使用 makeAutoObservable(target, overrides?, options?)
makeAutoObservable 就像是加强版的 makeObservable，在默认情况下它将推断所有的属性。你仍然可以使用 overrides 重写某些注解的默认行为
与使用 makeObservable 相比，makeAutoObservable 函数更紧凑，也更容易维护，因为新成员不需要显式地提及。 然而，makeAutoObservable 不能被用于带有 super 的类或 子类
推断规则：
  所有 自有 属性都成为 observable
  所有 getters 都成为 computed
  所有 setters 都成为 action
  所有 prototype 中的 functions 都成为 autoAction
  所有 prototype 中的 generator functions 都成为 flow
  在 overrides 参数中标记为 false 的成员将不会被添加注解。例如，将其用于像标识符这样的只读字段
 */

import {
  observable,
  makeObservable,
  autorun,
  computed,
  flow,
  action,
  makeAutoObservable,
} from "mobx";
class Doubler {
  PI = 3.14; //
  value;
  constructor(value) {
    makeAutoObservable(this, { PI: false }, { autoBind: true }); // autoBind给函数绑定this
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
  console.log(doubler.PI);
});
autorun(() => {
  console.log(doubler.value);
  console.log(doubler.double);
});
const increment = doubler.increment;
increment();
const fetch = doubler.fetch;
fetch();
doubler.PI = 3.15; // PI如果不会变的话，可以通过注解取消响应
