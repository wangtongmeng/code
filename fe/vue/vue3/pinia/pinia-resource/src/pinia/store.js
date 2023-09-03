import {
  getCurrentInstance,
  reactive,
  inject,
  effectScope,
  computed,
  toRefs,
} from "vue";
import { piniaSymbol } from "./rootStore";

// options api
function createOptionStore(id, options, pinia) {
  const { state, getters = {}, actions = {} } = options;
  const store = reactive({}); // 这个就是store

  let scope;

  function wrapAction(action) {
    return function () {
      // 保证解构的action this指向store
      let result = action.call(store, ...arguments);
      // TODO 其他事情
      return result;
    };
  }

  // 为了后续方便，将初始化的流程放到一个函数里
  function setup() {
    // 根据用户的状态将其保存到pinia中
    pinia.state.value[id] = state ? state() : {};

    const localState = toRefs(pinia.state.value[id]);
    return Object.assign(
      localState,
      actions,
      Object.keys(getters).reduce((gettersObj, getterName) => {
        gettersObj[getterName] = computed(() => {
          return getters[getterName].call(store);
        });
        return gettersObj;
      }, {})
    ); // 自己生成的store
  }

  const setupStore = pinia._e.run(() => {
    // 划分父子作用域
    scope = effectScope();
    return scope.run(() => setup());
  });

  for (let key in setupStore) {
    const v = setupStore[key];
    if (typeof v === "function") {
      setupStore[key] = wrapAction(v);
    }
  }

  Object.assign(store, setupStore);
  pinia._s.set(id, store); // store -> reactive({count: 0})
}

export function defineStore(idOptions, setup) {
  let id;
  let options;
  if (typeof idOptions === "string") {
    id = idOptions;
    options = setup; // 选项式api (有可能是 setup函数)
  } else {
    id = idOptions.id;
    options = idOptions;
  }

  function useStore() {
    const instance = getCurrentInstance();
    const pinia = instance && inject(piniaSymbol);
    if (!pinia._s.has(id)) {
      // 没有就创建一个store，将store存储在_s中
      createOptionStore(id, options, pinia);
    }
    // 取出存储的store并返回
    const store = pinia._s.get(id);
    return store;
  }

  return useStore;
}
