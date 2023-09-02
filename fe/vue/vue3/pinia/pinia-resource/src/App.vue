<script setup>
import {useCounterStore} from './stores/counter'
const store = useCounterStore()
</script>
<template>
{{ store.count }}  
{{ store.double }}
<button @click="store.increment">+</button>
</template>