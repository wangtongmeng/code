<!-- 基础图形 -->
<template>
  <div class="container">
      <canvas id="c" width="200" height="200" style="border: 1px solid #ccc"></canvas>
    
    
    <!-- <img src="../images/dog.jpeg" id="my-image"> -->
  </div>
</template>

<script setup>
import { fabric } from 'fabric'
import { onMounted } from 'vue';

function createRect() {
  // 绑定画布
  // const canvas = new fabric.Canvas('c', {
  // 不可交互的画布
  const canvas = new fabric.StaticCanvas('c', {
    width: 300,
    height: 300,
    // backgroundColor: '#fff'
  })
  // 创建一个矩形
  const rect = new fabric.Rect({ top: 10, left: 10, width: 60, height: 60, fill: '#aa96da' })
  // 创建一个矩形
  const circle = new fabric.Circle({ top: 30, left: 50, radius: 40, fill: '#a18cd1' })
  // 椭圆
  const ellipse = new fabric.Ellipse({ top: 30, left: 50, rx: 70, ry: 30, fill: '#84fab0' })
  const triangle = new fabric.Triangle({
    top: 40,
    left: 100,
    width: 60, // 底边长度
    height: 80, // 底边到对角的距离（三角形的高）
    fill: 'blue'
  })
  // 创建线段元素
  const line = new fabric.Line([
    10, 10, // 起始点坐标
    200, 300 // 结束点坐标
  ],
    {
      stroke: 'red', // 笔触颜色
    })
  // 添加到 canvas 中
  // canvas.add(rect)
  // canvas.add(circle)
  // canvas.add(ellipse)
  // canvas.add(triangle)
  // canvas.add(line)

  // var imgElement = document.getElementById('my-image');
  // var imgInstance = new fabric.Image(imgElement, {
  //   left: 100,
  //   top: 100,
  //   angle: 30,
  //   opacity: 0.85
  // });
  // canvas.add(imgInstance);

  fabric.Image.fromURL('/images/dog.jpeg', function (oImg) {
    // 将其缩小，然后将其翻转，然后再将其添加到画布上
    oImg
      .scale(0.5)
      .set('flipX', true)
      .set('left', 50)
      .set('top', 50)
    canvas.add(oImg);
  });

  // 创建一个带有拐角和弧度的虚线路径
var path = new fabric.Path('M 100 200 Q 200 100 300 200', {
  fill: '',
  stroke: 'black',
  strokeWidth: 1,
  strokeDashArray: [5, 5] // 虚线样式
});

// 将路径添加到画布中
canvas.add(path);
}

onMounted(() => {
  createRect()
})

</script>

<style lang="scss" scoped></style>