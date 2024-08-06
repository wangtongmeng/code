<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const num = ref(0);
const increment1 = (event) => {
  console.log(event);
  num.value = num.value + 1;
};
const increment2 = (val, event) => {
  num.value = num.value + val;
};
const loadHandler = () => {
  console.log("load");
};

onMounted(() => {
  window.addEventListener("load", loadHandler);
});
onUnmounted(() => {
  // 【注意】 用 vue 绑定的事件，组件销毁时会自动被解绑
  // 自己绑定的事件，需要自己销毁！！
  window.removeEventListener("load", loadHandler);
});
</script>
