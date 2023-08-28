<template>
  <div>属性 直接通过store访问 {{ counter.count }}</div>
  <div>属性 解构后访问 {{ count }}</div>
  <div>计算属性 直接通过store访问{{ counter.double }} | {{ counter.doubleCountPlusOne }} | {{ counter.getUserById(1) }} | {{ counter.otherGetter }}</div>
  <div>计算属性 解构后{{ double }} | {{ doubleCountPlusOne }} | {{ getUserById(1) }} | {{ otherGetter }} </div>
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
  <button @click="counter.increment">actions 同步操作 直接通过store调用</button>
  <button @click="increment">actions 同步操作 调用解构后的访问</button>
  <button @click="counter.$reset">重置 直接通过store调用</button>
  <button @click="$reset">重置 解构后调用 </button>
  <button @click="someRequest">actions 异步请求</button>
  <button @click="getUsers">actions 异步请求 结合其他store数据</button>
</template>
<script setup>
import {useCounterStore} from '@/stores/counter'
import { storeToRefs } from 'pinia';
const counter = useCounterStore()
const {count, double, getUserById,  doubleCountPlusOne, otherGetter, items} = storeToRefs(counter) // 解构使用 storeToRefs
const {someRequest, getUsers, increment, $reset } = counter // 方法直接解构

// 改变store中state的值
counter.count++ // 1.直接改
counter.$patch({count: counter.count + 1}) // 2.通过$patch
counter.increment() // 3.通过action

</script>
<style scoped>
button {
  display: block;
}
li {
  display: inline-block;
}
</style>
