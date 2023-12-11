<!-- 响应式基础 -->
<template>
  <div>
    <!-- 在模板中使用ref值，会自动取.value，也就是自动解包-->
    
    <button @click="count++">{{ count }}</button>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(1)
console.log(count); // RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 1, _value: 1}

// 在 JS 中，需要通过 .value 修改值
setTimeout(() => {
  count.value++
}, 1000);
function increment() {
  count.value++
}
</script>

<style lang="scss" scoped>

</style>