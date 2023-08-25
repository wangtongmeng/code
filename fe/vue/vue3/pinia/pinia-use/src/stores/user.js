import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 函数的写法（实现高级用法）
// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

// 对象的写法
export const useUserStore = defineStore("user", {
  state: () => {
    return { name: 0 };
  },
  // getters: {
  //   double: (store) => store.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  // },
});
