import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

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
  // 定义 state  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      count: 0,
      num: 1,
      items: [{ name: "lisi" }],
      users: [{ name: "lisi", id: 1 }],
    };
  },
  getters: {
    double: (store) => store.count * 2,
    // 通过this访问getters
    doubleCountPlusOne() {
      return this.double + 1;
    },
    // 像getter传递参数
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
    otherGetter(state) {
      const userStore = useUserStore();
      return state.count + userStore.user.name;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    async someRequest() {
      try {
        this.items = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([{ name: "张三" }, { name: "李四" }]);
          }, 1000);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      const userStore = useUserStore();
      if (userStore.user) {
        await this.someRequest();
      } else {
        throw new Error("未登录");
      }
    },
  },
});
