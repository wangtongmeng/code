import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IListItem {
  id: number
  name: string
}
const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return {
    count,
    increment
  }
}
const useList = () => {
  const list = ref<IListItem[]>([])
  const listLoading = ref(false)
  const getList = async () => {
    listLoading.value = true
    // 请求接口
    list.value = [{ id: 1, name: 'list1' }]
    listLoading.value = false
  }
  return {
    list,
    listLoading,
    getList
  }
}
const useEditModal = (getList: () => Promise<void>) => {
  const eidtModalVisble = ref(false)
  const eidtModalContent = ref<IListItem>()
  const editModalLoading = ref(false)
  const editModalSaveLoading = ref(false)

  const showEditModal = (eidtModalVisble.value = true)

  const getListItem = async () => {
    editModalLoading.value = true
    // 请求接口
    eidtModalContent.value = { id: 1, name: 'list1' }
    editModalLoading.value = false
  }
  const updateListItem = async () => {
    editModalSaveLoading.value = true
    // 请求接口...
    editModalSaveLoading.value = false
    // 更新成功后，刷新列表
    getList()
  }
  return {
    eidtModalVisble,
    eidtModalContent,
    editModalLoading,
    editModalSaveLoading,
    showEditModal,
    getListItem,
    updateListItem
  }
}

// export const useExampleStore = defineStore('example', () => {
//   const { getList, ...listOthers } = useList()

//   return {
//     getList,
//     ...listOthers,

//     ...useCounter(),
//     ...useEditModal(getList)
//   }
// })

// 平铺
export const useExampleStore = defineStore('example', () => {
  const { count, increment } = useCounter()
  const { list, listLoading, getList } = useList()
  const {
    eidtModalVisble,
    eidtModalContent,
    editModalLoading,
    editModalSaveLoading,
    showEditModal,
    getListItem,
    updateListItem
  } = useEditModal(getList)

  return {
    count,
    increment,
    list,
    listLoading,
    getList,
    eidtModalVisble,
    eidtModalContent,
    editModalLoading,
    editModalSaveLoading,
    showEditModal,
    getListItem,
    updateListItem
  }
})
