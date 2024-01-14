<template>
  <div>
    <div>
      <div>圆形</div>
      <svg id="1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
          style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
      </svg>
    </div>
    <div>
      <div>矩形</div>
      <svg id="2" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
      </svg>
      <!-- 边框透明 -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
        <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
stroke-opacity:0.9" />
      </svg>
      <!-- 整体透明 -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
        <rect x="50" y="20" width="150" height="150" style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
      </svg>
    </div>
    <div>
      <div>椭圆</div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <ellipse cx="300" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
      </svg>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>