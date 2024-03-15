<template>
  <div>
    <div>count: {{ count }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <button @click="increment">增加</button>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '@/stores/exampleStore'
import { storeToRefs } from 'pinia'
import { onBeforeUnmount } from 'vue'
const store = useExampleStore()
// 通过解构的方式获取 store 中的 state，为了保持 state 的响应式特性，需要用 storeToRefs 进行包裹。
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

onBeforeUnmount(() => {
  store.$reset()
})
</script>

<style scoped lang="scss"></style>
