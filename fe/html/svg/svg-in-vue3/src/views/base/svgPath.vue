<template>
  <div>
    <div>
      <div>圆形</div>
      <svg id="1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px"
        style="border: 1px solid red">
        <!-- <defs>
          <linearGradient id="gradient">
            <stop offset='0%' stop-color="blue" />
            <stop offset='100%' stop-color="red" />
          </linearGradient>
        </defs>
        <path d="M 100 100 L 200 100 L 200 200" stroke="url('#gradient')" stroke-width="3" fill="transparent" /> -->
        <path d="M 100 100 L 200 100 L 200 200" stroke="#ccc" stroke-width="3"  fill="transparent" />
        <!-- <path d="M 100 100 L 200 100 L 200 200" stroke="red" stroke-width="3" stroke-dasharray="50, 200" stroke-dashoffset="50" fill="transparent" class="line" id="animate" /> -->
        <!-- 动画 -->
        <!-- <path d="M 100 100 L 200 100 L 200 200" stroke="red" stroke-width="3" stroke-dasharray="50, 200"  fill="transparent" ref="animateRef" id="aniamte-path" /> -->
        <!-- 线段过渡  -->
        <defs>
          <linearGradient id="gradient">
            <stop offset='0%' stop-color="yellow" />
            <stop offset='100%' stop-color="red" />
          </linearGradient>
        </defs>
        <path d="M 100 100 L 200 100 L 200 200" stroke="url(#gradient)" stroke-width="3" stroke-dasharray="50, 200"  fill="transparent" ref="animateRef" id="aniamte-path" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import {onMounted,ref} from 'vue'
const animateRef = ref()
import anime from 'animejs'
// onMounted(() => {
//   animateRef.value.animate({stroke: 'green', strokeDashoffset: 250}, {duration: 2000, iterations: Infinity})
// })
</script>

<style lang="scss" scoped>
.line {
  animation: animte 2s linear infinite
}
@keyframes animte {
  0% {
    stroke-dashoffset: 50
  }
  100% {
    stroke-dashoffset: 300
  }
}
</style>