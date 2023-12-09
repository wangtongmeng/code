<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
const msg = ref('你好')
const rawHtml = ref('<span style="color: red">This should be red.</span>')
</script>

// 文本插值
// <template>
//   <span>{{msg}}</span>
// </template>

// 原始Html
<template>
  <div>
  <p>{{rawHtml}}</p>
  <p v-html="rawHtml"></p>
  </div>
  
</template>
  
// <RouterView />

<style scoped>

</style>
