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
  <button @click="someRequest">actions 异步请求</button>
  <button @click="getUsers">actions 异步请求 结合其他store数据</button>
</template>
<script>
import { defineComponent } from 'vue';
import { storeToRefs} from 'pinia'
import {useCounterStore} from '@/stores/counter'

export default defineComponent({
  setup(){
    const counter = useCounterStore()
    const {count, double, getUserById,  doubleCountPlusOne, otherGetter, items} = storeToRefs(counter) // 解构使用 storeToRefs
const {someRequest, getUsers, increment } = counter // 方法直接解构
    return {counter, count, double, getUserById,  doubleCountPlusOne, otherGetter, items, someRequest, getUsers, increment }
  },
  computed: {

  },
  methods: {

  },
  
})
</script>

<style scoped>
button {
  display: block;
}
li {
  display: inline-block;
}
</style>
