<template>
  <!-- 占据全屏，会拉伸dom -->
  <!-- <v-scale-screen width="1920" height="1080" fullScreen> -->
    <div class="parent">
      <v-scale-screen width="1920" height="1080" :autoScale="{x: true, y: false}">
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
      </v-scale-screen>
    </div>
</template>

<script setup>
import VScaleScreen from 'v-scale-screen'
</script>

<style lang="scss" scoped>
.parent {
  height: 1000px;
  width: 500px;
  border: 1px solid red;
}
.container {
  background-color: antiquewhite;
  width:  1920px;
  height: 1080px;
  display: flex;
  flex-wrap: wrap;
}
.section {
  font-size: 100px;
  width: 33.33%;
  height: 33.33%;
  &:nth-child(2n+1) {
    background-color:aquamarine
  }
}
</style>