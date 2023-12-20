<template>
  <div>
    <div class="btn-x">
      <button @click="setWidth(200)">宽度200px</button>
      <button @click="setHeight(300)">高度300px</button>
      <button @click="setDimensions(600, 400)">一键设置宽高：宽度600px，高度400px</button>
    </div>
    <canvas id="canvasBox" width="600" height="600" style="border: 1px solid red"></canvas>

  </div>
</template>

<script setup>
import {fabric} from 'fabric'
import { ref } from 'vue';
const  canvasRef = ref()

// 设置画布宽度
function setWidth(width) {
  canvasRef.value.setWidth(width)
}

// 设置画布高度
function setHeight(height) {
  canvasRef.value.setHeight(height)
}

// 一键设置宽高
function setDimensions(width, height) {
  canvasRef.value.setDimensions({
    width,
    height
  })
}

window.onload = function () {
  // 使用 元素id 创建画布，此时可以在画布上框选
  canvasRef.value = new fabric.Canvas('canvasBox', {
    width: 100,
    height: 100
  })
}

</script>

<style lang="scss" scoped></style>