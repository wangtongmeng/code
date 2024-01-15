<template>
  <div>
    <div>
      <div>圆形</div>
      <svg id="1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px"
        style="border: 1px solid red">
        <defs>
          <linearGradient id="gradient">
            <stop offset='0%' stop-color="blue" />
            <stop offset='50%' stop-color="red" />
          </linearGradient>
        </defs>
        <path d="M 0 0 L 500 500" stroke="url('#gradient')" stroke-width="3" />
      </svg>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>