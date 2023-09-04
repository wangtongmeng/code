<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore} from './stores/counter'
import {useTodoStore} from './stores/todo'
const store = useCounterStore()
// setup api (导出不能直接解构，需要转成ref再使用) reactive({ref()}) 会拆包
const todoStore = useTodoStore()
const {increment}=  store
const {todo, todos } = storeToRefs(todoStore) // reactive() 只能转对象
const {addTodo} = todoStore // 函数不转


console.log('store', store); // Proxy(Object) {count: 0}
</script>
<template>
{{ store.count }}  
{{ store.double }}
<button @click="increment">+</button>

<div>
  <input type="text" v-model="todo">
  <button @click="addTodo">添加todo</button>
  <li v-for="item of todos">{{ item }}</li>
</div>
</template>