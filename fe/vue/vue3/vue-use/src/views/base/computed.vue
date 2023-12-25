<template>
  <div>
    <!-- 计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value -->
    <span>{{ publishedBooksMessage }}</span>
    <span>{{ fullName }}</span>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
// 1. computed基本使用
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


// 2. 计算属性 vs 方法
// 计算属性 会缓存结果，除非依赖项发生变化

// 3. 可写的计算属性
const firstName = ref('张')
const lastName = ref('三')
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

setTimeout(() => {
  fullName.value = '李 四'
}, 1000);

// 4. 注意点
// 4.1 computed的getter只做计算，不要在 getter 中做异步请求或者更改 DOM！(可以使用watch来处理副作用)
// 4.2 避免直接修改计算属性值，如果只有getter，直接修改computed的只是无效的
</script>

<style lang="scss" scoped>

</style>