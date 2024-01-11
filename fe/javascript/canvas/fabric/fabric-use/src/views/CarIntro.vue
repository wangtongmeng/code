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
import { Tween } from '@tweenjs/tween.js';
// import vueSvg from '../assets/vue.svg'
import carPic from '../assets/car.png'
import lineSvg from '../assets/line.svg'
const canvasContainer = ref()
const fabricRef = ref()

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
    sys5: { startX: percentX(85), startY: percentY(68), endX: percentX(100), endY: percentY(100) },
    // row1-right
    sys6: { startX: percentX(55), startY: percentY(40), endX: percentX(100), endY: percentY(12.5) },
    sys7: { startX: percentX(60), startY: percentY(38), endX: percentX(100), endY: percentY(37.5) },
    sys8: { startX: percentX(86), startY: percentY(26), endX: percentX(100), endY: percentY(62.5) },
    sys9: { startX: percentX(80), startY: percentY(30), endX: percentX(100), endY: percentY(87.5) },
  }

  return data
}

function drawStartCircle(canvas, startX, startY, isActive = false, id) {
  let color = isActive ? '#F79595' : '#36B5AC'
  let color1 = isActive ? 'rgba(243,89,89, 0.23)' : '#36B5AC'
  // 画车的起始点
  const startOuterCircle = new fabric.Path(`M ${startX}, ${startY} m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0`);
  startOuterCircle.set({ stroke: color, fill: 'transparent' });
  const startInnerCircle = new fabric.Path(`M ${startX}, ${startY} m -4,0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0`);
  startInnerCircle.set({ fill: color });

  if (isActive) {
    const startActiveCircle = new fabric.Path(`M ${startX}, ${startY} m -16,0 a 16,16 0 1,0 32,0 a 16,16 0 1,0 -32,0`);
    startActiveCircle.set({ fill: color1 });
    canvas.add(startActiveCircle)
  }
  startOuterCircle.id = id
  canvas.add(startOuterCircle)
  canvas.add(startInnerCircle)
}
function drawEndCircle(canvas, endX, endY, bottomOrRight, isActive = false) {
  let color = isActive ? '#F79595' : '#36B5AC'
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
  endCircle.set({ fill: color });
  canvas.add(endCircle)
}

function drawLine(canvas, path, isActive = false) {
  let color = isActive ? '#F79595' : '#36B5AC'
  const line = new fabric.Path(path)
  line.set({ stroke: color, fill: 'transparent' })
  canvas.add(line)
}



function drawLineBottom1(canvas, isActive) {
  const { startX, startY, endX, endY } = calcCoodinates().sys1
  drawStartCircle(canvas, startX, startY, isActive, 'bottom1Circle')
  drawEndCircle(canvas, endX, endY, 'bottom', isActive)
  // 画连线
  drawLine(canvas, `
        M ${startX - 12} ${startY} 
        L ${endX + 20} ${startY} 
        Q ${endX} ${startY} ${endX} ${startY + 20} 
        L ${endX} ${endY - 8}
      `)
}
function drawLineBottom2(canvas, isActive) {
  const { startX, startY, endX, endY } = calcCoodinates().sys2
  drawStartCircle(canvas, startX, startY, isActive)
  drawEndCircle(canvas, endX, endY, 'bottom', isActive)
  // 画连线
  drawLine(canvas, `
        M ${startX - 12} ${startY} 
        L ${endX + 20} ${startY} 
        Q ${endX} ${startY} ${endX} ${startY + 20} 
        L ${endX} ${endY - 8}
      `)
}
function drawLineBottom3(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys3
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'bottom')
  // 画连线
  let radius = Math.abs(startX - endX) / 2
  let middleY = startY + (endY - startY) / 2 // 两点的y坐标的中间
  drawLine(canvas, `
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - radius}
    Q ${startX} ${middleY} ${startX - radius} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + radius}
    L ${endX} ${endY - 4}
  `)
}
function drawLineBottom4(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys4
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'bottom')
  // 画连线
  let middleY = startY + (endY - startY) / 2  // 两点的y坐标的中间
  drawLine(canvas, `
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - 20}
    Q ${startX} ${middleY} ${startX + 20} ${middleY}
    L ${endX - 20} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + 20}
    L ${endX} ${endY - 4}
  `)
}
function drawLineBottom5(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys5
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'bottom')
  let x1 = startX + (endX - startX) * 0.2
  let y2 = startY + (endY - startY) * 0.8
  let x3 = endX - (endY - startY) * (1 - 0.8)
  let y3 = endY - (endY - startY) * (1 - 0.8)
  drawLine(canvas, `
    M ${startX + 12} ${startY}
    L ${x1 - 20} ${startY}
    Q ${x1} ${startY} ${x1} ${startY + 20}
    L ${x1} ${y2 - 20}
    Q ${x1} ${y2} ${x1 + 20} ${y2}
    L ${x3 - 10} ${y3}
    Q ${x3} ${y3} ${x3 + 20} ${y3 + 20}
    L ${endX} ${endY}
  `)
}
function drawLineRight6(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys6
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY, 'right')
  drawLine(canvas, `
        M ${startX} ${startY - 12} 
        L ${startX} ${endY + 20} 
        Q ${startX} ${endY} ${startX + 20} ${endY} 
        L ${endX - 8} ${endY}
      `)
}
function drawLineRight7(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys7
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY)
  // 画连线
  drawLine(canvas, `
    M ${startX} ${startY - 12} 
    L ${startX} ${percentY(18)} 
    Q ${startX} ${percentY(18) - 20} ${startX + 20} ${percentY(18) - 20} 
    L ${percentX(94)} ${percentY(18) - 20} 
    Q ${percentX(94) + 20} ${percentY(18) - 20} ${percentX(94) + 20} ${percentY(18)}
    L ${percentX(94) + 20} ${endY - 20}
    Q ${percentX(94) + 20} ${endY} ${percentX(94) + 40} ${endY}
    L ${endX - 4} ${endY}
  `)
}
function drawLineRight8(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys8
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY)
  let middleX = startX + (endX - startX) / 2
  // 画连线
  drawLine(canvas, `
    M ${startX + 12} ${startY} 
    L ${middleX - 20} ${startY} 
    Q ${middleX} ${startY} ${middleX} ${startY + 20}
    L ${middleX} ${endY - 20}
    Q ${middleX} ${endY} ${middleX + 20} ${endY}
    L ${endX - 4} ${endY}
  `)
}
function drawLineRight9(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys9
  drawStartCircle(canvas, startX, startY)
  drawEndCircle(canvas, endX, endY)
  let middleX = startX + (endX - startX) / 2
  // 画连线
  drawLine(canvas, `
    M ${startX + 12} ${startY} 
    L ${middleX - 20} ${startY} 
    Q ${middleX} ${startY} ${middleX} ${startY + 20}
    L ${middleX} ${endY - 20}
    Q ${middleX} ${endY} ${middleX + 20} ${endY}
    L ${endX - 4} ${endY}
  `)
}

const init = (canvas, isActive = false) => {
  // 设置画布大小
  setSize(canvas)
  // 引入图片
  addImg(canvas)
  drawLineBottom1(canvas, isActive)
  drawLineBottom2(canvas)
  drawLineBottom3(canvas)
  drawLineBottom4(canvas)
  drawLineBottom5(canvas)

  drawLineRight6(canvas)
  drawLineRight7(canvas)
  drawLineRight8(canvas)
  drawLineRight9(canvas)
}
onMounted(() => {
  // 绑定画布
  const canvas = new fabric.StaticCanvas('stockGraph')
  fabricRef.value = canvas
  init(canvas)
  console.log('objects', canvas.getObjects().find(object => object.id === 'bottom1Circle'));
  let circle = canvas.getObjects().find(object => object.id === 'bottom1Circle')
  setTimeout(() => {
    // circle.animate('stroke', '87ceeb', {
    //   onChange: canvas.renderAll.bind(canvas),
    //   duration: 300,
    // })

    updateObjectColor(circle)

    // 使用 Tween.js 实现平滑的颜色过渡
    function updateObjectColor(object) {
      const targetColor = 'red'; // 目标颜色为绿色

      // 使用 Tween.js 实现平滑的颜色过渡
      const tween = new Tween({ value: 0 })
        .to({ value: 1 }, 300)
        .onUpdate(() => {
          const value = tween._object.value;
          const currentColor = interpolateColor('red', targetColor, value);
          object.set('stroke', currentColor);
          object.setCoords();
          object.canvas && object.canvas.requestRenderAll();
        });

      function animate() {
        if (tween.isPlaying()) {
          tween.update();
          requestAnimationFrame(animate);
        }
      }

      tween.start();
      animate();
    }
    // 插值函数，用于在起始颜色和目标颜色之间进行插值
    function interpolateColor(startColor, endColor, value) {
      const startRGB = fabric.Color.fromHex(startColor).getSource();
      const endRGB = fabric.Color.fromHex(endColor).getSource();
      const currentRGB = startRGB.map((start, index) =>
        Math.round(start + (endRGB[index] - start) * value)
      );
      return new fabric.Color(currentRGB, { format: 'rgb' }).toRgb();
    }
  }, 1000);

  // setTimeout(() => {
  //   init(canvas, true)
  // }, 2000);
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  transition-duration: 0.3s;
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