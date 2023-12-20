<!-- 基础图形 -->
<template>
  <div class="container">
    <div class="left">
      <div ref="canvasWrapperRef" id="canvas-wrapper" class="canvas-wrapper">
        <canvas id="c" ></canvas>

      </div>
      <div class="left-bottom">
        <div class="card">card 1</div>
        <div class="card">card 2</div>
        <div class="card">card 3</div>
        <div class="card">card 4</div>
      </div>

    </div>
    <div class="right">
      <div class="card">card 5</div>
      <div class="card">card 6</div>
      <div class="card">card 7</div>
      <div class="card">card 8</div>
      <div class="card">card 9</div>
    </div>


    <!-- <img src="../images/dog.jpeg" id="my-image"> -->
  </div>
</template>

<script setup>
import { fabric } from 'fabric'
import { nextTick, onMounted, onUnmounted, ref } from 'vue';

const canvasWrapperRef = ref()
const canvas = ref()
const dogImg = ref()


const onPageResize =  async () => {
  let wrapperWidth = document.documentElement.clientWidth - 100
  let wrapperHeight = document.documentElement.clientHeight - 100
  console.log('1', canvasWrapperRef.value.offsetWidth, canvasWrapperRef.value.offsetHeight);
  canvas.value.setDimensions({
    width: wrapperWidth,
    height: wrapperHeight

  })

  dogImg.value
      .set('left', (wrapperWidth - dogImg.value.width) / 2)
      .set('top', (wrapperHeight - dogImg.value.height) / 2)
    canvas.value.renderAll()

}

onMounted(() => {
  console.log('mounted', canvasWrapperRef.value.offsetWidth);
  // 绑定画布
  canvas.value = new fabric.StaticCanvas('c', {
    // 设置canvas画布尺寸
    width: canvasWrapperRef.value.offsetWidth, // 将canvas元素设置与父元素同宽
    height: canvasWrapperRef.value.offsetHeight // 将canvas元素设置与父元素同高
  })
  // 引入图片并居中
  fabric.Image.fromURL('/images/dog.jpeg', function (oImg) {
    dogImg.value = oImg
    oImg
      .set('left', (canvasWrapperRef.value.offsetWidth - oImg.width) / 2)
      .set('top', (canvasWrapperRef.value.offsetHeight - oImg.height) / 2)

    canvas.value.add(oImg);
  });
  // 监听页面尺寸变化，更新 canvas
  window.addEventListener('resize', onPageResize);
})
onUnmounted(() => {
  window.removeEventListener('resize', onPageResize)
})

// TODO 页面尺寸变化，更新 canvas

</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  .left {
    box-sizing: border-box;
    height: 100%;

    flex: 1;
    display: flex;
    flex-direction: column;


    .canvas-wrapper {
      flex: 1;
      background-color: aqua;
      overflow: hidden;
    }

    .left-bottom {
      // border: 1px solid blue;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .card {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
}
</style>