<template>
  <svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg"
    style="border: 1px solid red;background-color: #000">
    <defs>
      <linearGradient id="gradient">
        <stop :offset="gradientOffset + '%'" stop-color="blue" />
        <stop :offset="(gradientOffset + 16.6) + '%'" stop-color="red" />
      </linearGradient>
    </defs>
    <path id="base-path" fill="transparent" stroke="red" stroke-opacity="0.3" stroke-width="4"
      d="M10 80 Q 77.5 10, 145 80 T 280 80" class="base-path"></path>
    <path fill="transparent" stroke="url(#gradient)" stroke-linecap="round" stroke-opacity="0.7"
      stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line2"></path>
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const gradientOffset = ref(0);

onMounted(() => {
  const startTime = performance.now();

  function updateGradientOffset() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = (elapsed % 4000) / 4000; // 计算当前进度，范围在 0 到 1 之间
    gradientOffset.value = progress * 100; // 计算渐变位置的偏移量
    requestAnimationFrame(updateGradientOffset);
  }

  requestAnimationFrame(updateGradientOffset);
});
</script>

<style lang="scss" scoped>
.base-path {
  stroke-dasharray: 8, 8;
}

.line2 {
  stroke-dasharray: 52, 260.6;
  animation: dash2 4s linear infinite;
}

@keyframes dash2 {
  from {
    stroke-dashoffset: 312.6;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>