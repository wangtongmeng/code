<template>
  <div>{{ counter.count }}</div>
  <div>计算属性{{ counter.double }}</div>
  <button @click="counter.increment">加1</button>
</template>
<script setup>
import {useCounterStore} from '@/stores/counter'
const counter = useCounterStore()

// 改变store中的值
counter.count++ // 直接改
counter.$patch({count: counter.count + 1}) // 通过$patch
counter.increment() // 通过action
</script>