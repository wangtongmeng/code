import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { usePlatformStore } from './platformStore'
interface ISubscribeItem {
  id: number
  name: string
}

export const useSubscribeStore = defineStore('subscribe', () => {
  const platformStore = usePlatformStore()

  const subscribeList = ref<ISubscribeItem[]>([])
  const getSubscribeList = () => {
    // 请求是需要平台参数
    if (platformStore.platform === 'X') {
      subscribeList.value = [{ id: 1, name: 'X平台订阅' }]
    } else {
      subscribeList.value = [{ id: 1, name: 'Y平台订阅' }]
    }
  }
  return {
    subscribeList,
    getSubscribeList
  }
})

// export const useSubscribeStore = defineStore('subscribe', () => {
//   const platformStore = usePlatformStore()
//   const { platform } = storeToRefs(platformStore)

//   const subscribeList = ref<ISubscribeItem[]>([])
//   const getSubscribeList = () => {
//     // 请求是需要平台参数
//     if (platform.value === 'X') {
//       subscribeList.value = [{ id: 1, name: 'X平台订阅' }]
//     } else {
//       subscribeList.value = [{ id: 1, name: 'Y平台订阅' }]
//     }
//   }
//   return {
//     subscribeList,
//     getSubscribeList
//   }
// })
