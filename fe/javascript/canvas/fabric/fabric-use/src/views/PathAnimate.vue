<template>
  <div>
    <canvas id="c" width="1000" height="1000"></canvas>
  </div>
</template>

<script setup>
import { fabric } from 'fabric'
import { onMounted, ref } from 'vue';
onMounted(() => {
  const canvas = new fabric.Canvas('c');
  const path = `
    M 50 50
    L 50 200
    Q 50 220 70 200
    L 200 200
  `
  const line = new fabric.Path(path)
  line.set({
    stroke: 'red',
    fill: 'transparent'
  })
  canvas.add(line)
  console.log(line);
  // 获取路径的总长度
var totalLength = line.get('length');
console.log('totalLength', totalLength);
// 计算前10%长度的位置
// var length10Percent = totalLength * 0.1;
// var point = line.getPointAtLength(length10Percent);

// // 创建子路径对象
// var subPathData = pathData.substring(0, point.segment1 + 1);
// var subPath = new fabric.Path(subPathData, { fill: 'transparent', stroke: 'red' });

// // 将子路径添加到画布中
// canvas.add(subPath);
})
</script>

<style lang="scss" scoped>

</style>