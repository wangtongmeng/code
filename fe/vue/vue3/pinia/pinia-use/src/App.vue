<script setup>
import {  RouterView } from 'vue-router'
import Counter from './views/Counter.vue';
import Counter1 from './views/Counter1.vue';
</script>

<template>
  <!-- <RouterView /> -->
  <Counter />
  <div>=======组件用options api，通过映射辅助函数使用Store</div>
  <Counter1 />
</template>

<style scoped>

</style>
