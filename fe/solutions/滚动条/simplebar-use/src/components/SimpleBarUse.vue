<template>
  <div class="hello">
    <!-- 配置simplebar实现交互机制 -->
    <simplebar 
      data-simplebar-auto-hide="false"
      :options="simplebarOptions"
      class="wrapper"
    >
      <div v-for="index in 100" :key="index" class="content-item">{{ index }}</div>
    </simplebar>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
export default {
  name: 'SimplebarUse',
  components: {
    simplebar
  },
  props: {
    msg: String
  },
  data() {
    return {
      simplebarOptions: {
        autoHide: false, // 初始不自动隐藏
        // timeout: 1000, // 停止滚动后1秒隐藏
        // scrollbarMinSize: 20, // 滚动条最小尺寸
        // scrollbarMaxSize: 30, // 悬停时滚动条放大尺寸
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 240px;
  max-height: 300px;
}
</style>
