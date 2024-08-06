<template>
  <button @click="state.count++">+1</button>
  {{ state.count }}
</template>
<script setup>
import { reactive, onMounted } from "vue";
let state = reactive({ count: 0 });

// reactive 返回的是proxy代理对象，多次代理返回的会是同一个
console.log(state === reactive(state)); // true

onMounted(() => {
  setTimeout(() => {
    // 【注意】不能替换整个对象
    state = reactive({ count: 1 });
  }, 2000);
});
</script>
