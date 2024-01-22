<template>
  <svg width="1500px" height="1500px" version="1.1" xmlns="http://www.w3.org/2000/svg"
    style="border: 1px solid red;background-color: #000">
    <!-- <defs>
      <linearGradient :id="gradientId" :x1="gradientStart.x" :y1="gradientStart.y" :x2="gradientEnd.x" :y2="gradientEnd.y">
        <stop offset="0%" stop-color="blue" />
        <stop offset='100%' stop-color="red" />
      </linearGradient>
    </defs> -->
    <!-- <path ref="basePath" fill="transparent" stroke="red" stroke-opacity="0.3" stroke-width="4"
      d="M10 80 L 100 80 Q 120 80 120 100  L 120 300  L 300 300" class="base-path"></path>
    <path fill="transparent" :stroke="gradientUrl" stroke-linecap="round" stroke-opacity="0.7"
      stroke-width="4" d="M10 80 L 100 80 Q 120 80 120 100 L 120 300 L 300 300" class="line2"></path> -->


      <defs>
      <linearGradient id="gradient" :x1="start.x" :y1="start.y" :x2="end.x" :y2="end.y" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="red" />
        <stop offset='1' stop-color="yellow" />
      </linearGradient>
    </defs>
      <path ref="basePath" fill="transparent" stroke="red" stroke-opacity="0.3" stroke-width="4"
      d="M10 80 L 1010 80" class="base-path"></path>
    <path fill="transparent" stroke="url(#gradient)" stroke-linecap="round" stroke-opacity="0.7"
      stroke-width="4" d="M10 80 L 1010 80" class="line2" ref="animateRef"></path>
      
  </svg>
  <svg width="300" height="500">
      <defs>
        <linearGradient id="test"  x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#12c2e9" />
          <stop offset="100%" stop-color="#c471ed" />
        </linearGradient>
      </defs>
      <rect fill="url(#test)" x="10" y="10" width="200" height="100" stroke="red"></rect>
    </svg>
    <svg width="600" height="200" viewBox="0 190 600 200" xmlns="http://www.w3.org/2000/svg" version="1">
<defs>
    <linearGradient id="e" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
        <stop stop-color="steelblue" offset="0" />
        <stop stop-color="red" offset="1" />
    </linearGradient>
</defs>
 <line x1="40" y1="210" x2="460" y2="290" stroke="url(#e)" stroke-width="30"/> 
</svg>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const gradientOffset = ref(0);
const gradientId = 'gradient';
const basePath = ref(null);
const animateRef = ref()

const gradientStart = computed(() => {
  if (basePath.value) {
    const pathLength = basePath.value.getTotalLength();
    const startPoint = basePath.value.getPointAtLength(pathLength * gradientOffset.value);
    return { x: startPoint.x, y: startPoint.y };
  }
  return { x: 0, y: 0 };
});

const gradientEnd = computed(() => {
  if (basePath.value) {
    const pathLength = basePath.value.getTotalLength();
    const endPoint = basePath.value.getPointAtLength(pathLength * gradientOffset.value + 52);
    return { x: endPoint.x, y: endPoint.y };
  }
  return { x: 0, y: 0 };
});

const gradientUrl = computed(() => `url(#${gradientId})`);


const start = ref({x: 0, y: 0})
const end = ref({x: 0, y: 0})

onMounted(() => {
  // const startTime = performance.now();

  // function updateGradientOffset() {
  //   const currentTime = performance.now();
  //   const elapsed = currentTime - startTime;
  //   const progress = (elapsed % 10000) / 10000; // 计算当前进度，范围在 0 到 1 之间
  //   gradientOffset.value = progress; // 计算渐变位置的偏移量
  //   console.log('progress * 100', progress);
  //   requestAnimationFrame(updateGradientOffset);
  // }

  // requestAnimationFrame(updateGradientOffset);

  const totalLen = animateRef.value.getTotalLength()
  console.log('totalLen', totalLen);
    const originStartPoint = animateRef.value.getPointAtLength(0)
    const originEndPoint =  animateRef.value.getPointAtLength(totalLen)
  // 线段头坐标
  const startPoint = animateRef.value.getPointAtLength(0)
  start.value = {
    x: (startPoint.x - originStartPoint.x) / (originEndPoint.x - originStartPoint.x) * 100 + '%',
    y: '0%'
  }
  console.log('start', start.value);
  
  // 线段尾坐标
  const endPoint = animateRef.value.getPointAtLength(100)
  end.value = {
    x: (endPoint.x - originStartPoint.x) / (originEndPoint.x - originStartPoint.x) * 100 + '%',
    y: '0%'
  }
  console.log('end', end.value );
});
</script>

<style lang="scss" scoped>
.base-path {
  stroke-dasharray: 8, 8;
}

.line2 {
  stroke-dasharray: 100, 900;
  // stroke-dashoffset:
  // animation: dash2 2s linear infinite;
}

// @keyframes dash2 {
//   from {
//     stroke-dashoffset: 1000;
//   }
//   to {
//     stroke-dashoffset: 0;
//   }
// }
</style>