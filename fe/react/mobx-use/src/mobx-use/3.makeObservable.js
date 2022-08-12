import { makeObservable, observable, autorun } from "mobx";

class Doubler {
  value;
  constructor(value) {
    makeObservable(this, { value: observable });
    this.value = value;
  }
}

const doubler = new Doubler(1);

autorun(() => {
  console.log(doubler.value);
});

doubler.value = 2;

/**
 * 1
 * 2
 */
