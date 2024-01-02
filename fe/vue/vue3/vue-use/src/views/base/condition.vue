<template>
  <div>
    <!-- if 或 if / else  -->
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <!-- if / else if / else  -->
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <!-- template 上的 v-if 多个元素统一控制 -->
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <!-- v-show -->
    <h1 v-show="ok">v-show</h1>
    <!-- v-if vs v-show -->
    <!-- v-if 真实渲染，会导致组件的销毁与重建 -->
    <!-- v-show  控制 css 属性来显示隐藏 diplay: none -->
    <!-- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。 -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
const awesome = ref(true)
const type = ref('A')
const ok = ref(false)
setTimeout(() => {
  awesome.value = false
  type.value = 'xxx'
  ok.value = true
}, 500);
</script>

<style lang="scss" scoped></style>