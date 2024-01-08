<template>
  <div class="container" ref="canvasContainer">
    <canvas class="canvas" id="stockGraph"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, markRaw } from 'vue';
import carPic from '../images/car.svg'
import { fabric } from 'fabric'

import { useSupplyOverviewStore } from '../store'
const store = useSupplyOverviewStore()


const fabricRef = ref()
const canvasContainer = ref()
const graphIds = genGraphIds()

const map = {
  sys1: 'bottom1',
  sys2: 'bottom2',
  sys3: 'bottom3',
  sys4: 'bottom4',
  sys5: 'bottom5',
  sys6: 'right6',
  sys7: 'right7',
  sys8: 'right8',
  sys9: 'right9',
}

watch(() => store.storeData.activeSys, (newVal, oldVal) => {
  // 激活系统样式
  activeSysStyle(newVal, oldVal)
})


onMounted(() => {
  // 绑定画布
  const canvas = new fabric.StaticCanvas('stockGraph')
  fabricRef.value = markRaw(canvas)
  // 渲染画布
  init(canvas)
  // 监听画布尺寸变化， 重新更新画布
})

function activeSysStyle(sys: string, old: string) {
  const canvas = fabricRef.value
  const objects = canvas.getObjects()
  const activeSys = graphIds[map[sys]]
  const oldSys = graphIds[map[old]]
  let startOuterCircleObj
  let startInnerCircleObj
  let startActiveCircleObj
  let lineObj
  let endCircleObj
  let startOuterCircleOldObj
  let startInnerCircleOldObj
  let startActiveCircleOldObj
  let lineOldObj
  let endCircleOldObj
  objects.forEach(obj => {
    if (obj.id === activeSys.startOuterCircle) {
      startOuterCircleObj = obj
    }
    if (obj.id === activeSys.startInnerCircle) {
      startInnerCircleObj = obj
    }
    if (obj.id === activeSys.startActiveCircle) {
      startActiveCircleObj = obj
    }
    if (obj.id === activeSys.line) {
      lineObj = obj
    }
    if (obj.id === activeSys.endCircle) {
      endCircleObj = obj
    }
    // 老系统
    if (obj.id === oldSys.startOuterCircle) {
      startOuterCircleOldObj = obj
    }
    if (obj.id === oldSys.startInnerCircle) {
      startInnerCircleOldObj = obj
    }
    if (obj.id === oldSys.startActiveCircle) {
      startActiveCircleOldObj = obj
    }
    if (obj.id === oldSys.line) {
      lineOldObj = obj
    }
    if (obj.id === oldSys.endCircle) {
      endCircleOldObj = obj
    }
  })

  // 新系统激活样式
  const activeColor = '#F79595'
  const activeBgColor = 'rgba(243,89,89, 0.23)'
  startOuterCircleObj.set('stroke', activeColor)
  startInnerCircleObj.set('fill', activeColor)
  startActiveCircleObj.set('fill', activeBgColor)
  lineObj.set('stroke', activeColor)
  endCircleObj.set('fill', activeColor)
  // 上个系统重置样式
  const resetColor = '#36B5AC'
  const resetBgColor = 'transparent'
  startOuterCircleOldObj.set('stroke', resetColor)
  startInnerCircleOldObj.set('fill', resetColor)
  startActiveCircleOldObj.set('fill', resetBgColor)
  lineOldObj.set('stroke', resetColor)
  endCircleOldObj.set('fill', resetColor)
  // 更新画布
  canvas.renderAll()


}

function genGraphIds() {
  const ids = {}
  const arr = ['bottom1', 'bottom2', 'bottom3', 'bottom4', 'bottom5', 'right6', 'right7', 'right8', 'right9']
  arr.forEach(name => {
    ids[name] = {
      startOuterCircle: name + 'OuterCircle',
      startInnerCircle: name + 'InnerCircle',
      startActiveCircle: name + 'ActiveCircle',
      line: name + 'Line',
      endCircle: name + 'EndCircle'
    }
  })
  return ids
}

function percentX(per) {
  const { width } = getContainerSize()
  return width * per / 100
}
function percentY(per) {
  const { height } = getContainerSize()
  return height * per / 100
}

function addImg(canvas) {
  // 使用fabric的api加载图片
  fabric.Image.fromURL(
    carPic, // 参数1：图片路径
    img => { // 参数2：图片加载完成后的回调函数
      const { width, height } = getContainerSize()
      if (!img.width || !img.height) {
        return
      }
      const scaleY = height / img.height * 0.8
      img.set({
        // 图片高度等于画布高度的80%，图片宽度等比例缩放
        scaleX: scaleY,
        scaleY,
        // stroke: 'red',
        // strokeWidth: 1,
        top: percentY(10), // 图片垂直居中
        left: (width - img.width * scaleY) * 2 / 3, // (容器宽度 -  图片宽度) * 2 / 3
      })


      // 将图片添加到画布中
      canvas.add(img)
      // img.sendToBack()
      canvas.sendToBack(img) // 图层往下移动


    })
}

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
function calcCoodinates() {
  // 获取所有 起点和终点坐标
  const { width, height } = getContainerSize()

  // 图片高度
  const imgHeight = height * 0.8
  // 图片宽度
  const imgWidth = imgHeight * 2106 / 1407
  const imgLeft = (width - imgWidth) * 2 / 3
  const imgTop = height * 0.1
  const imgPercentX = (percent: number) => {
    return imgLeft + imgWidth * percent / 100
  }
  const imgPercentY = (percent: number) => {
    return imgTop + imgHeight * percent / 100
  }
  const data = {
    // row2
    sys1: { startX: imgPercentX(20), startY: imgPercentY(60), endX: percentX(12.5), endY: percentY(100) },
    sys2: { startX: imgPercentX(52), startY: imgPercentY(73), endX: percentX(37.5), endY: percentY(100) },
    sys3: { startX: imgPercentX(58), startY: imgPercentY(64), endX: percentX(62.5), endY: percentY(100) },
    sys4: { startX: imgPercentX(64), startY: imgPercentY(53), endX: percentX(87.5), endY: percentY(100) },
    sys5: { startX: imgPercentX(80), startY: imgPercentY(48), endX: percentX(100) - 4, endY: percentY(100) },
    // row1-right
    sys6: { startX: imgPercentX(33), startY: imgPercentY(38), endX: percentX(100), endY: percentY(12.5) },
    sys7: { startX: imgPercentX(47), startY: imgPercentY(32), endX: percentX(100), endY: percentY(37.5) },
    sys8: { startX: imgPercentX(98), startY: imgPercentY(24), endX: percentX(100), endY: percentY(62.5) },
    sys9: { startX: imgPercentX(95), startY: imgPercentY(40), endX: percentX(100), endY: percentY(87.5) },
  }

  return data
}

function drawStartCircle(canvas, startX, startY, idPrefix) {

  // const color = isActive ? '#F79595' : '#36B5AC'
  // const color1 = isActive ? 'rgba(243,89,89, 0.23)' : '#36B5AC'
  const color = '#36B5AC'
  const color1 = '#36B5AC'
  // 画车的起始点

  const startOuterCircle = new fabric.Path(`M ${startX}, ${startY} m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0`);
  startOuterCircle.set({ stroke: color, fill: 'transparent' });
  const startInnerCircle = new fabric.Path(`M ${startX}, ${startY} m -4,0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0`);
  startInnerCircle.set({ fill: color });

  // 添加激活圆圈，先设置成透明色
  const startActiveCircle = new fabric.Path(`M ${startX}, ${startY} m -16,0 a 16,16 0 1,0 32,0 a 16,16 0 1,0 -32,0`);
  startActiveCircle.set({ fill: 'transparent' });

  startOuterCircle.id = idPrefix + 'OuterCircle'
  startInnerCircle.id = idPrefix + 'InnerCircle'
  startActiveCircle.id = idPrefix + 'ActiveCircle'
  canvas.add(startOuterCircle)
  canvas.add(startInnerCircle)
  canvas.add(startActiveCircle)
}
function drawEndCircle(canvas, endX, endY, bottomOrRight, idPrefix) {
  // const color = isActive ? '#F79595' : '#36B5AC'
  const color = '#36B5AC'
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
  endCircle.id = idPrefix + 'EndCircle'
  canvas.add(endCircle)
}

function drawLine(canvas, path, idPrefix) {
  // const color = isActive ? '#F79595' : '#36B5AC'
  const color = '#36B5AC'
  const line = new fabric.Path(path)
  line.set({ stroke: color, fill: 'transparent' })
  line.id = idPrefix + 'Line'
  canvas.add(line)
}

function drawLineBottom1(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys1
  drawStartCircle(canvas, startX, startY, 'bottom1')
  drawEndCircle(canvas, endX, endY, 'bottom', 'bottom1')
  // 画连线
  drawLine(canvas, `
        M ${startX - 12} ${startY} 
        L ${endX + 20} ${startY} 
        Q ${endX} ${startY} ${endX} ${startY + 20} 
        L ${endX} ${endY - 8}
      `, 'bottom1')
}

function drawLineBottom2(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys2
  drawStartCircle(canvas, startX, startY, 'bottom2')
  drawEndCircle(canvas, endX, endY, 'bottom', 'bottom2')
  // 画连线
  drawLine(canvas, `
        M ${startX - 12} ${startY} 
        L ${endX + 20} ${startY} 
        Q ${endX} ${startY} ${endX} ${startY + 20} 
        L ${endX} ${endY - 8}
      `, 'bottom2')
}

function drawLineBottom3(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys3
  drawStartCircle(canvas, startX, startY, 'bottom3')
  drawEndCircle(canvas, endX, endY, 'bottom', 'bottom3')
  // 画连线
  const radius = Math.abs(startX - endX) / 2
  const middleY = startY + (endY - startY) / 2 // 两点的y坐标的中间
  drawLine(canvas, `
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - radius}
    Q ${startX} ${middleY} ${startX > endX ? startX - radius : startX + radius} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + radius}
    L ${endX} ${endY - 4}
  `, 'bottom3')
}

function drawLineBottom4(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys4
  drawStartCircle(canvas, startX, startY, 'bottom4')
  drawEndCircle(canvas, endX, endY, 'bottom', 'bottom4')
  // 画连线
  const middleY = startY + (endY - startY) / 2  // 两点的y坐标的中间
  drawLine(canvas, `
    M ${startX} ${startY + 12} 
    L ${startX} ${middleY - 20}
    Q ${startX} ${middleY} ${startX + 20} ${middleY}
    L ${endX - 20} ${middleY}
    Q ${endX} ${middleY} ${endX} ${middleY + 20}
    L ${endX} ${endY - 4}
  `, 'bottom4')
}

function drawLineBottom5(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys5
  drawStartCircle(canvas, startX, startY, 'bottom5')
  drawEndCircle(canvas, endX, endY, 'bottom', 'bottom5')
  const x1 = startX + (endX - startX) * 0.6
  const y2 = startY + (endY - startY) * 0.8
  const x3 = endX - (endY - startY) * (1 - 0.8)
  const y3 = endY - (endY - startY) * (1 - 0.8)
  drawLine(canvas, `
    M ${startX + 12} ${startY}
    L ${x1 - 20} ${startY}
    Q ${x1} ${startY} ${x1} ${startY + 20}
    L ${x1} ${y2 - 20}
    Q ${x1} ${y2} ${x1 + 20} ${y2}
    L ${x3 - 10} ${y3}
    Q ${x3} ${y3} ${x3 + 20} ${y3 + 20}
    L ${endX} ${endY}
  `, 'bottom5')
}

function drawLineRight6(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys6
  drawStartCircle(canvas, startX, startY, 'right6')
  drawEndCircle(canvas, endX, endY, 'right', 'right6')
  drawLine(canvas, `
        M ${startX} ${startY - 12} 
        L ${startX} ${endY + 20} 
        Q ${startX} ${endY} ${startX + 20} ${endY} 
        L ${endX - 8} ${endY}
      `, 'right6')
}
function drawLineRight7(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys7
  drawStartCircle(canvas, startX, startY, 'right7')
  drawEndCircle(canvas, endX, endY, 'right', 'right7')
  // 画连线
  drawLine(canvas, `
    M ${startX} ${startY - 12} 
    L ${startX} ${percentY(20)} 
    Q ${startX} ${percentY(20) - 20} ${startX + 20} ${percentY(20) - 20} 
    L ${percentX(94)} ${percentY(20) - 20} 
    Q ${percentX(94) + 20} ${percentY(20) - 20} ${percentX(94) + 20} ${percentY(20)}
    L ${percentX(94) + 20} ${endY - 20}
    Q ${percentX(94) + 20} ${endY} ${percentX(94) + 40} ${endY}
    L ${endX - 4} ${endY}
  `, 'right7')
}

function drawLineRight8(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys8
  drawStartCircle(canvas, startX, startY, 'right8')
  drawEndCircle(canvas, endX, endY, 'right', 'right8')
  const middleX = startX + (endX - startX) / 2
  // 画连线
  drawLine(canvas, `
    M ${startX + 12} ${startY} 
    L ${middleX - 20} ${startY} 
    Q ${middleX} ${startY} ${middleX} ${startY + 20}
    L ${middleX} ${endY - 20}
    Q ${middleX} ${endY} ${middleX + 20} ${endY}
    L ${endX - 4} ${endY}
  `, 'right8')
}

function drawLineRight9(canvas) {
  const { startX, startY, endX, endY } = calcCoodinates().sys9
  drawStartCircle(canvas, startX, startY, 'right9')
  drawEndCircle(canvas, endX, endY, 'right', 'right9')
  const middleX = startX + (endX - startX) / 2
  // 画连线
  drawLine(canvas, `
    M ${startX + 12} ${startY} 
    L ${middleX - 20} ${startY} 
    Q ${middleX} ${startY} ${middleX} ${startY + 20}
    L ${middleX} ${endY - 20}
    Q ${middleX} ${endY} ${middleX + 20} ${endY}
    L ${endX - 4} ${endY}
  `, 'right9')
}

function init(canvas) {
  // 设置画布大小等于父容器大小
  setSize(canvas)
  // 引入图片
  addImg(canvas)
  drawLineBottom1(canvas)
  drawLineBottom2(canvas)
  drawLineBottom3(canvas)
  drawLineBottom4(canvas)
  drawLineBottom5(canvas)

  drawLineRight6(canvas)
  drawLineRight7(canvas)
  drawLineRight8(canvas)
  drawLineRight9(canvas)
}


</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.car-img {
  height: 90%;
  margin-right: 10%;
}
</style>
