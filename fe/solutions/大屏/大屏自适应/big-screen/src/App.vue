<template>
  <div>
    <!-- 页面整体大屏，通过scale缩放适应页面宽高变化 -->
    <!-- <demo1-vue /> -->
    <!-- 页面局部大屏，通过scale缩放适应父容器宽高变化 -->
    <!-- <demo2-vue /> -->
    <!-- 整体大屏，scale缩放，封装screen-adpater组件 -->
    <!-- <demo3-vue /> -->

    <!-- vw vh 方案 -->
    <!-- <demo4-vue /> -->

    <!-- terminal打印 -->
    <!-- <demo5-vue /> -->

    <!-- v-scale-screen  -->
    <!-- <demo6-vue /> -->
    <!-- 自定义组件 扩展 v-scale-screen 支持按父容器scale缩放 -->
    <demo7-vue />
  </div>
</template>

<script setup>
import demo1Vue from './views/demo1.vue';
import demo2Vue from './views/demo2.vue';
import demo3Vue from './views/demo3.vue';
import demo4Vue from './views/demo4.vue';
import demo5Vue from './views/demo5.vue';
import demo6Vue from './views/demo6.vue';
import demo7Vue from './views/demo7.vue';
</script>

<style lang="scss" scoped>

</style>