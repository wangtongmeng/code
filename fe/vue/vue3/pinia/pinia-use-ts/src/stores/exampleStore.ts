import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 这里为了方便看放在这里，真实情况很可能 store 很大，所以类型一般存放在单独的 type.ts 文件中，方便 store、业务组件、api 文件等模块中其他文件使用
interface IArrayDataItem {
  value: string
  label: string
}

export const useExampleStore = defineStore('example', () => {
  // 基本类型
  const count = ref(0)
  // 计算属性
  const doubleCount = computed(() => count.value * 2)
  // 对象
  const objectData = ref({ a: 1 })
  // 数组 数组内的数据类型无法自动推断，需要显示声明
  const selectOptions = ref<IArrayDataItem[]>([])

  const increment = () => count.value++
  return {
    count,
    doubleCount,
    objectData,
    selectOptions,
    increment
  }
})
