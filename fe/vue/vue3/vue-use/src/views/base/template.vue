<!-- 模板语法 -->
<template>
  <div>
    <!-- 文本插值 -->
    <span>{{ msg }}</span>
    <!-- 原始 html -->
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <!-- Attribute 绑定 -->
    <div v-bind:id="id">属性绑定</div>
    <!-- 简写 -->
    <div :id="id">属性绑定简写</div>
    <!-- 布尔型 Attribute  -->
    <!-- 依据 true / false 值来决定 attribute 是否应该存在于该元素上 -->
    <button :disabled="isButtonDisabled">button</button>
    <!-- 动态绑定多个值 -->
    <div v-bind="objectAttrs">动态绑定多个值</div>
    <!-- 使用 JavaScript 表达式 -->
    {{ number + 1 }}
    {{ ok ? 'YES' : 'NO' }}
    <!-- 调用函数 每次组件更新都会调用 -->

    <!-- 指令  -->

  </div>
</template>

<script setup>
import {ref} from 'vue'
const msg = ref('msg')

const rawHtml = ref('<span style="color: red">This should be red.</span>')

const id = ref(1)

const isButtonDisabled = ref(true)

const objectAttrs = {
  id: 'container',
  class: 'wrapper'
}

const number = ref(1)
const ok = ref(true)
</script>

<style lang="scss" scoped>

</style>