import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 对象的写法
export const useUserStore = defineStore("user", {
  state: () => {
    return { user: { name: "wtm", age: 18 } };
  },
});
