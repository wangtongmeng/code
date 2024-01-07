<template>
  <div class="container">
    <div class="row1">
      <div class="row1-left" ref="canvasContainer">
        <canvas class="canvas" id="stockGraph"></canvas>
      </div>
      <div class="row1-right">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
    <div class="row2">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>

<script setup>
import { fabric } from 'fabric'
import { onMounted, ref } from 'vue';
// import vueSvg from '../assets/vue.svg'
import carPic from '../assets/car.png'
import lineSvg from '../assets/line.svg'
const canvasContainer = ref()

function setSize(canvas) {
  const { width, height } = getContainerSize()
  canvas.setDimensions({
    width,
    height
  })
}
function getContainerSize() {
  return {
    width: canvasContainer.value.clientWidth,
    height: canvasContainer.value.clientHeight
  }
}
function addImg(canvas) {
  // 使用fabric的api加载图片
  fabric.Image.fromURL(
    carPic, // 参数1：图片路径
    img => { // 参数2：图片加载完成后的回调函数
      console.log('img', img.width, img.height);
      const { width, height } = getContainerSize()
      console.log('img', img);
      img.set({
        scaleX: width / img.width * 0.8,
        scaleY: height / img.height * 0.8,
        stroke: 'red',
        strokeWidth: 1,
        top: percentY(10),
        left: percentX(19.9),
      })
      // 设置图片在画布中的位置
      // img.top = 50
      img.right = 0


      // 将图片添加到画布中
      canvas.add(img)
      // img.sendToBack()
      canvas.sendToBack(img) // 图层往下移动
    })
}
function percentX(per) {
  const { width, height } = getContainerSize()
  return width * per / 100
}
function percentY(per) {
  const { width, height } = getContainerSize()
  return height * per / 100
}
function calcCoodinates() {
  // 获取所有 起点和终点坐标
  let data = {
    // row2
    sys1: { startX: percentX(40), startY: percentY(60), endX: percentX(12.5), endY: percentY(100) },
    sys2: { startX: percentX(55), startY: percentY(70), endX: percentX(37.5), endY: percentY(100) },
    sys3: { startX: percentX(65), startY: percentY(70), endX: percentX(62.5), endY: percentY(100) },
    sys4: { startX: percentX(70), startY: percentY(65), endX: percentX(87.5), endY: percentY(100) },
    sys5: { startX: 0, startY: 0, endX: 0, endY: 0 },
    // row1-right
    sys6: { startX: percentX(55), startY: percentY(40), endX: percentX(100), endY: percentY(12.5) },
    sys7: { startX: percentX(60), startY: percentY(38), endX: percentX(100), endY: percentY(37.5) },
    sys8: { startX: 0, startY: 0, endX: 0, endY: 0 },
    sys9: { startX: 0, startY: 0, endX: 0, endY: 0 },
  }

  return data
}

function drawStartCircle (canvas, startX, startY) {
   // 画车的起始点
   const startOuterCircle = new fabric.Path(`M ${startX}, ${startY} m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0`);
  startOuterCircle.set({ stroke: '#36B5AC', fill: 'transparent' });
  const startInnerCircle = new fabric.Path(`M ${startX}, ${startY} m -4,0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0`);
  startInnerCircle.set({ fill: '#36B5AC' });
  canvas.add(startOuterCircle)
  canvas.add(startInnerCircle)
}
function drawEndCircle (canvas, endX, endY, bottomOrRight) {
   // 画卡片的终点
   let endCirclePath = ''
  if (bottomOrRight === 'bottom') {
    // 终点在下面一行
    endCirclePath = `M ${endX}, ${endY - 4} m -4,0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0`
  } else {
    // 终点在右边
    endCirclePath = `M ${endX - 4}, ${endY} m -4,0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0`
  }
  const endCircle = new fabric.Path(endCirclePath);
  endCircle.set({ fill: '#36B5AC' });
  canvas.add(endCircle)
}

function drawLine (canvas, path) {
  const line = new fabric.Path(path)
  line.set({stroke: '#36B5AC', fill: 'transparent'})
  canvas.add(line)
}

// 一个拐角的
function drawLineType1(canvas, startX, startY, endX, endY, bottomOrRight) {
   // 算终点相对于起点的相对位置
  // 终点相对于起点，在右边还是左边
  let isRightX = endX - startX > 0
  // 终点相当于起点，在上面还是下面
  let isBottomY = endY -  startY > 0
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, bottomOrRight) 
  // 画连线
  let path = ''
  if (isRightX) {
    if (isBottomY) {
      // 终点相对于起点，在右下
    } else {
      // 终点相对于起点，在右上
      path = `M ${startX} ${startY - 12} L ${startX} ${endY + 20} Q ${startX} ${endY} ${startX + 20} ${endY} L ${endX - 8} ${endY}`
    }
  }
  if (!isRightX) {
    if (isBottomY) {
      // 终点相对于起点，在左下
      path = `M ${startX - 12} ${startY} L ${endX + 20} ${startY} Q ${endX} ${startY} ${endX} ${startY + 20} L ${endX} ${endY - 8}`
    } else {
      // 终点相对于起点，在左上
    }
  }
  const line = new fabric.Path(path)
  line.set({stroke: '#36B5AC', fill: 'transparent'})
  canvas.add(line)
}

function drawLineBottom1 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys1
  drawLineType1(canvas, startX, startY, endX, endY, 'bottom')
}
function drawLineBottom2 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys2
  drawLineType1(canvas, startX, startY, endX, endY, 'bottom')
}
function drawLineBottom3 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys3
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'bottom')
  // 画连线
  let radius = Math.abs(startX - endX) / 2
  let middleY = startY + (endY - startY) / 2 // 两点的y坐标的中间
  drawLine(canvas,`
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - radius }
    Q ${startX} ${middleY} ${ startX - radius} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + radius}
    L ${endX} ${endY - 4}
  `)
}
function drawLineBottom4 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys4
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'bottom')
  // 画连线
  let middleY = startY + (endY - startY) / 2  // 两点的y坐标的中间
  drawLine(canvas,`
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - 20}
    Q ${startX} ${middleY} ${startX + 20} ${middleY}
    L ${endX - 20} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + 20}
    L ${endX} ${endY - 4}
  `)
  // L ${startX} ${middleY - radius }
  //   Q ${startX} ${middleY} ${ startX - radius} ${middleY}
  //   Q ${endX} ${middleY} ${endX} ${middleY + radius}
  //   L ${endX} ${endY - 4}
}
function drawLineBottom6 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys6
  drawLineType1(canvas, startX, startY, endX, endY, 'right')
}
function drawLineBottom7 (canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys7
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY)
  // 画连线
  drawLine(canvas,`
    M ${startX} ${startY - 12} 
    L ${startX} ${percentY(17)} 
    Q ${startX} ${percentY(17) - 20} ${startX + 20} ${percentY(17) - 20} 
    L ${percentX(92)} ${percentY(17) - 20} 
    Q ${percentX(92) + 20} ${percentY(17) - 20} ${percentX(92) + 20} ${percentY(17)}
    L ${percentX(92) + 20} ${endY - 20}
    Q ${percentX(92) + 20} ${endY} ${percentX(92) + 40} ${endY}
    L ${endX - 4} ${endY}
  `)
}
onMounted(() => {
  // 绑定画布
  const canvas = new fabric.StaticCanvas('stockGraph')
  // 设置画布大小
  setSize(canvas)
  // 引入图片
  addImg(canvas)
  drawLineBottom1(canvas)
  drawLineBottom2(canvas)
  drawLineBottom3(canvas)
  drawLineBottom4(canvas)
  drawLineBottom6(canvas)
  drawLineBottom7(canvas)
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}

.row1 {
  height: 80%;
  // background-color: aqua;
  display: flex;

  &-left {
    width: 80%;
    // background-color: blueviolet;
  position: relative;
  margin-bottom: -4px;
  margin-right: -4px;
  }

  &-right {
    width: 20%;
    background-color: darkgreen;
    display: flex;
    flex-direction: column;
    gap: 5px;

    // padding-left: 5px;
    .card {
      flex: 1;
      background-color: cornflowerblue;
      // margin-bottom: 5px;
      // &:last-child {
      //   margin-bottom: 0;
      // }
    }
  }
}

.row2 {
  height: 20%;
  background-color: bisque;
  display: flex;
  gap: 5px;

  .card {
    padding-left: 5px;
    flex: 1;
    height: 100%;
    background-color: aqua;
  }
}

.canvas {
  // background-color: black;
}
</style>