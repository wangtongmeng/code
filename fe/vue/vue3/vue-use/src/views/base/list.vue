<template>
  <div>
    <!-- v-for -->
    <!-- <li v-for="(item, index) in items">{{ item.message }} - {{ index }}</li> -->

    <!-- 定义 v-for 的变量别名时使用解构 -->
    <!-- <li v-for="({ message}, index) in items">{{ message }} - {{ index }}</li> -->

    <!-- 多层嵌套的 v-for，作用域的工作方式和函数的作用域很类似。每个 v-for 作用域都可以访问到父级作用域 -->
    <!-- <li v-for="item in items">
      <div v-for="childItem in item.children">{{ item.message }} - {{ childItem }}</div>
    </li> -->

    <!-- 可以使用 of 作为分隔符来替代 in -->
    <!-- <li v-for="item of items">{{ item.message }}</li> -->

    <!-- v-for 遍历对象 遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定 -->
    <!-- 第一个参数 value，第二参数是 key，第三个参数是 索引 -->
    <!-- <ul>
      <li v-for="(value, key, index) in myObject">{{ value  }} - {{ key }} - {{ index }}</li>
    </ul> -->

    <!-- v-for 中使用范围值  -->
    <!-- <div v-for="n in 10">{{ n }}</div> -->

    <!-- <template> 上的 v-for -->
    <!-- <ul>
      <template v-for="item in items">
        <li>{{ item.message }}</li>
        <div>其他dom</div>
      </template>
    </ul> -->

    <!-- v-if 和 v-for 一起用 优先级问题 -->
    <!-- v-if 比 v-for 的优先级更高，不建议一起用，可以使用 v-if 可以结合 computed 使用，再 v-for -->
    
    <!-- 通过 key 管理状态 -->
    <!-- 组件上使用 v-for -->
    <!-- 数组变化侦测 -->
    <!-- 展示过滤或排序后的结果 -->
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const items = ref([{ message: 'Foo', children: ['child1'] }, { message: 'Bar', children: ['child2', 'child3'] }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<style lang="scss" scoped></style>