<template>
  <screen-adapter :w="1440" :h="764">
    <div className="demo-root">
      <header>头部</header>
      <main>
        <div className="demo-left"></div>
        <div className="demo-center"></div>
        <div className="demo-right"></div>
      </main>
      <footer>底部</footer>
    </div>
  </screen-adapter>
</template>

<script setup>
import ScreenAdapter from '../components/ScreenAdpater/index.vue'
</script>

<style lang="scss" scoped>
.demo-root {
  height: 100%;
  // height: 2000px;
  display: flex;
  flex-direction: column;
  header {
    height: 200px;
    background: rgba(53, 150, 206, 0.3);
    font-size: 40px;
    text-align: center;
    line-height: 200px;
  }

  main {
    display: flex;
    flex: 1;
    div {
      flex: 1;
    }

    .demo-left {
      background: rgba(206, 52, 154, 0.3);
    }

    .demo-center {
      background: rgba(13, 30, 179, 0.3);
    }

    .demo-right {
      background: rgba(64, 163, 6, 0.849);
    }
  }

  footer {
    width: 100%;
    height: 100px;
    font-size: 40px;
    text-align: center;
    line-height: 100px;
    background: rgba(19, 211, 115, 0.3);
  }
}
</style>