import { computed, makeObservable, observable, autorun } from "mobx";

class Doubler {
  value;
  constructor(value) {
    makeObservable(this, { value: observable, double: computed });
    this.value = value;
  }
  get double() {
    return this.value * 2;
  }
}

const doubler = new Doubler(1);

autorun(() => {
  console.log(doubler.value);
  console.log(doubler.double);
});

setTimeout(() => {
  doubler.value = 2;
}, 500);

/**
 * 1
 * 2
 *
 * 0.5秒后
 *
 * 2
 * 4
 */
