<!-- 整个页面都是大屏 -->
<!-- 通过屏幕变化适配比例 -->
<template>
  <div className="screen-wrapper">
    <div className="screen" id="screen">
      <div className="demo-root">
        <header>头部</header>
        <main>
          <div className="demo-left"></div>
          <div className="demo-center"></div>
          <div className="demo-right"></div>
        </main>
        <footer>底部</footer>
      </div>
    </div>
    <footer className="large-footer"></footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
//数据大屏自适应函数
const handleScreenAuto = () => {
  const designDraftWidth = 1920;//设计稿的宽度
  const designDraftHeight = 960;//设计稿的高度
  //根据屏幕的变化适配的比例
  const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
    (document.documentElement.clientWidth / designDraftWidth) :
    (document.documentElement.clientHeight / designDraftHeight);
  //缩放比例
  (document.querySelector('#screen')).style.transform = `scale(${scale}) translate(-50%)`;
}


onMounted(() => {
  //初始化自适应  ----在刚显示的时候就开始适配一次
  handleScreenAuto();
  //绑定自适应函数   ---防止浏览器栏变化后不再适配
  window.onresize = () => handleScreenAuto();
})

onUnmounted(() => {
  window.onresize = null
})


</script>

<style lang="scss" scoped>
/*
css
*/
.screen-wrapper {
  height: 100%;
  width: 100%;
  min-width: 1000px; // 最小适配宽度

  .screen {
    display: inline-block;
    width: 1920px;
    height: 960px;
    transform-origin: 0 0;
    position: absolute;
    left: 50%;

    .demo-root {
      header {
        width: 1920px;
        height: 200px;
        background: rgba(53, 150, 206, 0.3);
        font-size: 40px;
        text-align: center;
        line-height: 200px;
      }

      main {
        display: flex;
        height: 660px;

        div {
          width: 640px;
          height: 100%;
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
  }
}
</style>