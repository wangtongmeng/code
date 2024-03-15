<template>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <button @click="increment">增加</button>
</template>

<script setup lang="ts">
// import { useCounterForSetupStore } from '@/stores/counterForSetupStore'
import { useCounterForOptionsStore } from '@/stores/counterForOptionsStore'
import { storeToRefs } from 'pinia'
// const store = useCounterForSetupStore()
const store = useCounterForOptionsStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<style scoped></style>
