<script setup>
import {useCounterStore} from './stores/counter'
const store = useCounterStore()
console.log('store', store); // Proxy(Object) {count: 0}
</script>
<template>
{{ store.count }}  
{{ store.double }}
<button @click="store.increment">+</button>
</template>