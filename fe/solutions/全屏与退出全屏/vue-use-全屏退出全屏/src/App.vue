<template>
  <div>
    <div ref="el" class="box">
    <button @click="toggle" class="cursor">
      {{ !isFullscreen ? '全屏模式' : '退出全屏' }}
    </button>
    <br />
    <button @click="enter">进入全屏-enter</button>
    <br />
    <button @click="exit">退出全屏-exit</button>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';

const el = ref();
const { isFullscreen, toggle, enter, exit } = useFullscreen(el);

</script>

<style  scoped>
.box {
  background-color: aqua;
  width: 500px;
  height: 300px;
}
</style>