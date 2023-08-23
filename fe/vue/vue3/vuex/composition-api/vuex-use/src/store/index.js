import { createStore } from "vuex";
export default createStore({
  state: { name: "lisi" },
  mutations: {
    changeName(state, str) {
      state.name = str;
    },
  },
  actions: {
    getData(store) {
      console.log(111);
      setTimeout(() => {
        store.commit("changeName", "zhangsan");
      }, 2000);
    },
  },
});
