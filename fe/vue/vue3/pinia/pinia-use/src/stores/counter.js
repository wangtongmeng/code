import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Setup函数的写法（实现高级用法）
// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0); // ref() 就是 state 属性
//   const doubleCount = computed(() => count.value * 2); // computed() 就是 getters
//   function increment() { // function() 就是 actions
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

// 对象的写法
export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  getters: {
    double: (store) => store.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
