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
  }
}

const doubler = new Doubler(1);

autorun(() => {
  console.log(doubler.value);
});

doubler.increment();

/**
 * 1
 * 2
 * 3
 */
