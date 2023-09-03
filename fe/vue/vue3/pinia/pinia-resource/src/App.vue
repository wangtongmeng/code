<script setup>
import { ref } from 'vue';
import {useCounterStore} from './stores/counter'
import {useTodoStore} from './stores/todo'
const store = useCounterStore()
const todoStore = useTodoStore()
const {increment}=  store


console.log('store', store); // Proxy(Object) {count: 0}
</script>
<template>
{{ store.count }}  
{{ store.double }}
<button @click="increment">+</button>

<div>
  <input type="text" v-model="todoStore.todo">
  <button @click="todoStore.addTodo">添加todo</button>
  <li v-for="todo of todoStore.todos">{{ todo }}</li>
</div>
</template>