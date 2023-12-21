<template>
  <div>
    <!-- 页面整体大屏，通过scale缩放适应页面宽高变化 -->
    <demo1-vue />
    <!-- 页面局部大屏，通过scale缩放适应父容器宽高变化 -->
    <!-- <demo2-vue /> -->
  </div>
</template>

<script setup>
import demo1Vue from './views/demo1.vue';
import demo2Vue from './views/demo2.vue';
</script>

<style lang="scss" scoped>

</style>