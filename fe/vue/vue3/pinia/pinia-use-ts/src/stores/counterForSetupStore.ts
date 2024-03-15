import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用 composition api 模式定义 store
export const useCounterForSetupStore = defineStore('counterForSetup', () => {
  const count = ref(1)
  const objectRefData = ref({ a: 1 })
  const objectReactiveData = reactive({ a: 1 })
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, objectRefData, objectReactiveData, increment }
})
