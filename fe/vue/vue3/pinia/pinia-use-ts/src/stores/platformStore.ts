import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlatformStore = defineStore('platform', () => {
  const platform = ref('X')

  const onPlatformChange = () => {
    platform.value = platform.value === 'X' ? 'Y' : 'X'
  }
  return {
    platform,
    onPlatformChange
  }
})
