<template>
  <div class="wrapper" id="wrapper">
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style="border: 1px solid red;background-color: #000" id="car-svg">
      <!-- <defs>
        <linearGradient id="gradient">
          <stop :offset="gradientOffset + '%'" stop-color="blue" />
          <stop :offset="(gradientOffset + 16.6) + '%'" stop-color="red" />
        </linearGradient>
      </defs>
      <path id="base-path" fill="transparent" stroke="red" stroke-opacity="0.3" stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80" class="base-path"></path>
      <path fill="transparent" stroke="url(#gradient)" stroke-linecap="round" stroke-opacity="0.7"
        stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line2"></path> -->
      <!-- 第一个连线 -->
      <!-- 起点 -->
      <circle cx="40%" cy="40%" r="4px" fill="blue" />
      <circle cx="40%" cy="40%" r="8px" stroke="blue" fill="transparent" />
      <!-- <defs>
        <linearGradient id="gradient">
          <stop :offset="gradientOffset + '%'" stop-color="blue" />
          <stop :offset="(gradientOffset + 16.6) + '%'" stop-color="red" />
        </linearGradient>
      </defs> -->
      <path :d='path' stroke="blue" class="base-path" stroke-opacity="0.7" />
      <!-- <path :d='path' stroke="url(#gradient)" class="line2" stroke-opacity="0.7" stroke-linecap="round" /> -->
      <path id="line2" :stroke-dasharray="`${line2Part1} ${line2Part2}`" :d='path' stroke="red" class="line2" stroke-opacity="0.7" stroke-linecap="round" />
      <!-- 终点 -->
      <circle cx="30%" cy="calc(100% - 4px)" r="4px" fill="blue" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const gradientOffset = ref(0);
const path = ref('')
const line2Part1 = ref(0)
const line2Part2 = ref(0)
const line2Len = ref(0)
const line3Part1Percent = ref(0)

onMounted(() => {
  // 获取svg的宽高
  const svg = document.getElementById('car-svg')
  console.log('sr', svg.clientWidth, svg.clientHeight);
  const percentX = (percent) => {
    return svg.clientWidth * percent / 100
  }
  const percentY = (percent) => {
    return svg.clientHeight * percent / 100
  }
  path.value = `
  M ${percentX(40)} ${percentY(40) + 8}
  L ${percentX(40)} ${percentY(60)}
  Q ${percentX(40)} ${percentY(60) + 20} ${percentX(40) - 20} ${percentY(60) + 20}
  L ${percentX(30) + 20} ${percentY(60) + 20}
  Q ${percentX(30)} ${percentY(60) + 20}  ${percentX(30)} ${percentY(60) + 40}
  L ${percentX(30)} ${percentY(100) - 4}
`
// 获取线条长度
const line2 = document.getElementById('line2')
nextTick(() => {
  // 算出虚线 实线和虚线的长度
  line2Len.value = line2.getTotalLength()
  console.log(line2Len.value);
  line2Part1.value = 52
  line2Part2.value = line2Len.value - 52
  line3Part1Percent.value = 52 / line2Len.value

})
  // const startTime = performance.now();
  // function updateGradientOffset() {
  //   const currentTime = performance.now();
  //   const elapsed = currentTime - startTime;
  //   const progress = (elapsed % 4000) / 4000; // 计算当前进度，范围在 0 到 1 之间
  //   gradientOffset.value = progress * 100; // 计算渐变位置的偏移量
  //   requestAnimationFrame(updateGradientOffset);
  // }

  // requestAnimationFrame(updateGradientOffset);
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 50vw;
  height: 50vh;
}

.base-path {
  stroke-dasharray: 8, 8;
}

.line2 {
  // stroke-dasharray: 52 ;
  animation: dash2 4s linear infinite;
  // stroke-dashoffset: calc(260.92913818359375);
  // stroke-dashoffset: 52;

}

@keyframes dash2 {
  from {
    stroke-dashoffset: 260.92913818359375;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>