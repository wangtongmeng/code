<template>
  <div>
    <canvas id="c" width="1000" height="1000"></canvas>
  </div>
</template>

<script setup>
import { fabric } from 'fabric'
import { onMounted } from 'vue';

function drawFlowChartLine(start, end) {
  let startX = start.x
  let startY = start.y
  let endX = end.x
  let endY = end.y
  const canvas = new fabric.Canvas('c');

  const startCircle = new fabric.Circle({
    left: startX,
    top: startY,
    radius: 4,
    fill: '#36B5AC',
    originX: 'center',
    originY: 'center',
    selectable: false,
  });
  canvas.add(startCircle);

  const endCircle = new fabric.Circle({
    left: endX,
    top: endY,
    radius: 4,
    fill: '#36B5AC',
    originX: 'center',
    originY: 'center',
    selectable: false,
  });
  canvas.add(endCircle);

  const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)); // 圆弧半径

  const controlX = startX;
  const controlY = startY + radius;

  const pathData = `M${startX} ${startY} A${radius} ${radius} 0 0 1 ${controlX} ${controlY}`;
  const quarterCircle = new fabric.Path(pathData, {
    stroke: '#000',
    strokeWidth: 1,
    fill: 'transparent',
    selectable: false,
    evented: false,
  });
  canvas.add(quarterCircle);
}

onMounted(() => {
  drawFlowChartLine({x: 20, y: 20}, {x: 500, y: 300})
})
</script>

<style lang="scss" scoped></style>