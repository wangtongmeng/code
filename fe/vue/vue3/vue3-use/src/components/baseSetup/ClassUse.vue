<template>
  <div>
    <p :class="{ black: isBlack, yellow: isYellow }">使用 class</p>
    <p :class="[black, yellow]">使用 class(数组)</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>
<script setup>
import { toRefs, reactive } from "vue";
const state = reactive({
  isBlack: true,
  isYellow: true,

  black: "black",
  yellow: "yellow",

  // key为小驼峰
  styleData: {
    fontSize: "30px",
    color: "red",
    backgroundColor: "#ccc",
  },
});
// 只是为了方便，正常开发直接用 ref 分开写
const { isBlack, isYellow, black, yellow, styleData } = toRefs(state);
</script>
<style scoped>
.black {
  background-color: #999;
}
.yellow {
  color: yellow;
}
</style>
