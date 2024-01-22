<!-- https://juejin.cn/post/6995081482851057671 -->
<template>
  <div>
    <!-- 渐变 -->
    渐变
    <svg width="300" height="500">
      <defs>
        <linearGradient id="test"  x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stop-color="#12c2e9" />
          <stop offset="100%" stop-color="#c471ed" />
        </linearGradient>
      </defs>
      <rect fill="url(#test)" x="10" y="10" width="200" height="100" stroke="red"></rect>
    </svg>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>