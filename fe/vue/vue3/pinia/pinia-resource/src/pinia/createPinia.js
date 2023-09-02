import { ref, effectScope } from "vue";
import { piniaSymbol } from "./rootStore";
export function createPinia() {
  const scope = effectScope();
  // 整个应用的状态，稍后 defineStore 时，就会在这里增加状态
  const state = scope.run(() => ref({}));
  const pinia = {
    install(app) {
      // 所有组件都可以通过 inject 来访问，只能在setup中访问
      app.provide(piniaSymbol, pinia);
      // 所有组件都可以通过 this 来访问到 pinia
      app.config.globalProperties.$pinia = pinia;
    },
    use() {
      // 注入插件 自定义插件
    },
    state, // 记录状态 counter -> store.state
    _e: scope, // 管理整个store的作用域
    _s: new Map(), // 记录store映射关系 counter -> store
  };
  return pinia;
}
