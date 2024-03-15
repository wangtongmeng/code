import { defineStore } from 'pinia'

// 使用 options api 模式定义
export const useCounterForOptionsStore = defineStore('counterForOptions', {
  state: () => {
    return { count: 1, objectData: { a: 1 } }
  },
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

const data = {
  business_data: [
    {
      label: '供应链',
      value: '1'
    }
  ],
  part_name: [{ label: '零部件1', value: 1, depend: 'business_data' }]
}
