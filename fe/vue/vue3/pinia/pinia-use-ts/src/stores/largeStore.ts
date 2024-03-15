import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IListItem {
  id: number
  name: string
}

export const useExampleStore = defineStore('example', () => {
  const count = ref(0)
  const list = ref<IListItem[]>([])
  const listLoading = ref(false)
  const eidtModalVisble = ref(false)
  const eidtModalContent = ref<IListItem>()
  const editModalLoading = ref(false)
  const editModalSaveLoading = ref(false)

  const increment = () => count.value++
  const getList = async () => {
    listLoading.value = true
    // 请求接口
    list.value = [{ id: 1, name: 'list1' }]
    listLoading.value = false
  }

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
    count,
    list,
    increment,
    getList,
    showEditModal,
    getListItem,
    updateListItem
  }
})
