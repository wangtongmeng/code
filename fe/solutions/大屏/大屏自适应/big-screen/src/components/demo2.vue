<!-- 局部大屏展示 -->
<!-- 通过父容器变化适配比例 -->
<template>
  <div class="container">
    <header class="header">头部</header>
    <div class="content">
      <aside class="nav" :class="navClass">
        <button @click="onChange">伸缩</button>
      </aside>
      <div class="screen-wrapper" id="screen-wrapper">
        <main class="main" id="screen">
          <div class="demo-wrapper">
            <div className="demo-left">大盘区域</div>
            <div className="demo-center"></div>
            <div className="demo-right"></div>
          </div>
        </main>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const collapse = ref(false)
const onChange = () => {
  collapse.value = !collapse.value
}
const navClass = computed(() => ({
  collapse: collapse.value
}))
//数据大屏自适应函数
const handleScreenAuto = () => {
  const designDraftWidth = 1440 - 200;//设计稿的宽度
  const designDraftHeight = 764 - 60;//设计稿的高度
  //根据屏幕的变化适配的比例
  console.log(screen);
  const screenWrapper = document.getElementById('screen-wrapper')
  const scale = screenWrapper.clientWidth / screenWrapper.clientHeight < designDraftWidth / designDraftHeight ?
    (screenWrapper.clientWidth / designDraftWidth) :
    (screenWrapper.clientHeight / designDraftHeight);
  //缩放比例
  // (document.querySelector('#screen')).style.transform = `scale(${scale}) translate(-50%)`;
  (document.querySelector('#screen')).style.transform = `scale(${scale})`;
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
.container {
  width: 100vw;
  height: 100vh;

  .header {
    height: 60px;
    background-color: aqua;
  }

  .content {
    height: calc(100vh - 60px);
    display: flex;

    .nav {
      width: 200px;
      background-color: bisque;
      transition: all 0.2s;
      flex-shrink: 0;
      &.collapse {
        width: 50px;
      }
    }

    .screen-wrapper {
      flex: 1;
      background-color: cadetblue;
    }

    .main {
      height: 100%;
      .demo-wrapper {
        height: 100%;
        display: flex;

        div {
          // flex: 1;
          width: 413px;
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


    }
  }

}
</style>