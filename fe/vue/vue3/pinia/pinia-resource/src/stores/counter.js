import { defineStore } from "../pinia";
// id 必须是唯一的，否则会覆盖
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    double() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
