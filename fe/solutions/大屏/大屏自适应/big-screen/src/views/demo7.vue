<template>
  <!-- 占据全屏，会拉伸dom -->
  <div class="layout">
    <div class="header">header</div>
    <div class="content">
      <div class="sidebar" :style="style">导航 <button @click="expanded = !expanded">伸缩</button></div>
      <div class="main" id="main">
        <scale-screen :width="1920" :height="1080" type="fullScreen">
          <div class="container">
            <div class="section">1</div>
            <div class="section">2</div>
            <div class="section">3</div>

            <div class="section">4</div>
            <div class="section">5</div>
            <div class="section">6</div>

            <div class="section">7</div>
            <div class="section">8</div>
            <div class="section">9</div>
          </div>
        </scale-screen>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ScaleScreen from '../components/ScaleScreen/index.vue'
import VScaleScreen from 'v-scale-screen'
const expanded = ref(true)

const style = computed(() => {
  return {
    width: expanded.value ? '200px' : '100px'
  }
})

</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
}

.header {
  height: 60px;
}

.content {
  display: flex;
  height: calc(100vh - 60px);
  .sidebar {
    width: 200px;
    background-color: blueviolet;
    flex-shrink: 0;
  }
  .main {
    flex: 1;
    background-color:aqua;
  }
}

.container {
  background-color: antiquewhite;
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-wrap: wrap;
}

.section {
  font-size: 100px;
  width: 33.33%;
  height: 33.33%;

  &:nth-child(2n+1) {
    background-color: aquamarine
  }
}</style>