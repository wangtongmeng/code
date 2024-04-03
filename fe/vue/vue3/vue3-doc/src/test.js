// const { parse } = require('@vue/compiler-sfc');
import {parse} from 'vue/compiler-sfc'

const sfcContent = `
<template>
  <div>{{ message }}</div>
    <-- 注释 -->
  <slot></slot>
</template>

<script setup>
import { ref } from 'vue';,
const message = ref('Hello, Vue 3!');
</script>
`;

const res = parse(sfcContent);
console.log('res', res)