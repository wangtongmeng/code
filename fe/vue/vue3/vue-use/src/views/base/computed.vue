<template>
  <div>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 3 ? 'Yes' : 'No'
})

setTimeout(() => {
  author.books.push('vue 5')
}, 1000);

</script>

<style lang="scss" scoped>

</style>