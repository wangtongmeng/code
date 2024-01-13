<template>
  <!-- <svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid red;background-color: rgba(5, 117, 104, 1);"> -->
  <svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid red;background-color: #000">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <!-- <stop offset="0%" stop-color="#A4FFF9" opacity="0" />
        <stop offset="100%" stop-color="#36B5AC" /> -->

        <!-- <stop offset="0%" stop-color="red" opacity="0" />
        <stop offset="100%" stop-color="blue" /> -->
        
        <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>
    </defs>
    <path fill="transparent" stroke="red"  stroke-opacity="0.3" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="base-path"></path>
    <path fill="transparent" stroke="url(#gradient)" stroke-linecap="round" stroke-opacity="0.7" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line2">
    </path>
    <!-- <path fill="transparent" stroke="#000000" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="line1"></path> -->
   

  </svg>
</template>

<script setup>
// 1. time 0s，起点每0.5s像外变大，透明度逐渐变大到0
// 2. time 0s，同时线段向终点流去(每2s一次)
// 3. time 3s，终点的小圆圈变红
// 4. time 3s，预警列表新增一条数据
// 5. time 3s~5s，停顿2s
// 6. time 5s，恢复成蓝色，线段从终点流向起点，起点还是0.5s向外变大，透明度逐渐变大到0
</script>

<style lang="scss" scoped>
.base-path {
  stroke-dasharray: 8,8;
}
// .line1 {
//   stroke-dasharray: 340;
//   stroke-dashoffset: 40;
//   animation: dash 1.5s linear alternate infinite;
// }

.line2 {
  stroke-dasharray: 52, 268;
  stroke-dashoffset: 340;
  animation: dash2 4s linear infinite;
}

// @keyframes dash {
//   from {
//     stroke-dashoffset: 360;
//   }

//   to {
//     stroke-dashoffset: 40;
//   }
// }

@keyframes dash2 {
  from {
    stroke-dashoffset: 320;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>