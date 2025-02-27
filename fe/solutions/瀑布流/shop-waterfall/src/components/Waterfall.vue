<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Res } from '../Types';



const props = withDefaults(defineProps<{
  request: (params: { page: number; pageSize: number }) => Promise<Res>;
  gap?: number;
  columnNum?: number;
}>(), {
  gap: 10,
  columnNum: 2
});
const page = ref(1);
const pageSize = 10;
const list = ref<Res['list']>([]);
const totalCount = ref(0);
const waterfallContainerRef = ref<HTMLDivElement>();
const containerRef = ref<HTMLDivElement>();
const positionList = ref<{ columnIdx: number, columnHeight: number }[]>([]);
const domDataList = ref([]);

const canvas = document.createElement('canvas')
const getTextLineHeightCtx = canvas.getContext('2d')
getTextLineHeightCtx.font = '16px sans-serif'
let containerTop = 0;

const testList = [
  '当记忆的线缠绕过往支离破碎',
  '是慌乱占据了心扉，有花儿伴着蝴蝶, 孤燕可以双飞，夜深人静独徘徊',
  '当幸福恋人寄来红色分享喜悦，闭上双眼难过头也不敢回，仍然拣尽寒枝不肯安歇微带着后悔, 寂寞沙洲我该思念谁',
]

const getData = () => {
  return props.request({ page: page.value, pageSize }).then((res: Res) => {
    list.value = page.value === 1 ? res.list : [...list.value, ...res.list];
    totalCount.value = res.totalCount;
  });

}
// 计算瀑布流每一列列宽
const columnWidth = computed(() => {
  const allGapLength = props.gap * (props.columnNum - 1);
  if (!waterfallContainerRef.value) return 0;
  return (waterfallContainerRef.value?.clientWidth - allGapLength) / props.columnNum;
})
// 重置瀑布流每一列数据
const initPositionList = () => {
  positionList.value = [];
  // 首先计算应呈现的列数
  for (let i = 0; i < props.columnNum; i++) {
    positionList.value.push({
      columnIdx: i + 1,
      columnHeight: 0
    })
  }
}

const computeDomData = (startRenderIdx = 0) => {
  const tempDomDataList = []
  for (let i = 0; i < list.value.length; i++) {
    const param = {
      idx: startRenderIdx + i,
      columnIdx: 0,
      width: columnWidth.value,
      height: list.value[i].h * columnWidth.value / list.value[i].w,
      left: 0,
      top: 0,
      text: testList[Math.trunc(Math.random() * 3)],
      lineHeight: 74,// 根据css设置的值计算得到
    }
    // 排序，第一项必定是长度最短的一列
    positionList.value.sort((a, b) => a.columnHeight - b.columnHeight)
    param.columnIdx = positionList.value[0].columnIdx
    param.left = (param.columnIdx - 1) * (props.gap + columnWidth.value)
    param.top = positionList.value[0].columnHeight
    // css 样式表设置了 纵坐标的12px内边距，要加上
    param.lineHeight = getTextLineHeightCtx.measureText(param.text).width + 24 > columnWidth.value ? 98 : 78
    param.height += param.lineHeight
    positionList.value[0].columnHeight += param.height + props.gap
    tempDomDataList.push(param)
  }
  domDataList.value = domDataList.value.concat(tempDomDataList)
  setContainerHeight()
}
// 设置容器高度
const setContainerHeight = () => {
  positionList.value.sort((a, b) => a.columnHeight - b.columnHeight)
  if (containerRef.value) {
    containerRef.value.style.height = positionList.value[positionList.value.length - 1].columnHeight + 32 + 'px'
  }
}

// 计算元素是否符合渲染条件
const checkIsRender = (params) => {
  if (!waterfallContainerRef.value) return;
  const { top, height } = params
  const y = top + height + containerTop
  // 1个视口的数据再快速滚动滚动条时大概率会有加载项，不妨扩大到上下各0.5个视口，共2个视口内的数据，这样就比较丝滑了，这里也是自由发挥
  const screenOffset = waterfallContainerRef.value.offsetHeight / 2
  const topLine = waterfallContainerRef.value.scrollTop - screenOffset
  const bottomLine = waterfallContainerRef.value.scrollTop + waterfallContainerRef.value.offsetHeight + screenOffset
  // 是否在上线之上
  const overTopLine = topLine > y
  // 是否在下线之下
  const underBottomLine = top > bottomLine
  return {
    overTopLine,
    underBottomLine,
  }
}

const renderDomByDomDataList = (startRenderIdx = 0) => {
  if (!domDataList.value.length) return;
  const tempRenderMap = {}
  let topIdx = startRenderIdx
  let bottomIdx = startRenderIdx
  // 处于这两条线之间的元素将被渲染进容器
  for (let i = startRenderIdx; i < domDataList.value.length; i++) {
    const { idx } = domDataList.value[i]
    const { overTopLine, underBottomLine } = checkIsRender(domDataList.value[i])
    topIdx = topIdx < idx ? topIdx : idx
    bottomIdx = bottomIdx < idx ? idx : bottomIdx
  }
  const keys = Object.keys(Object.assign({}, tempRenderMap))
  // startIdx = +keys[0]
  // endIdx = +keys[keys.length - 1]
}


const init = async () => {
  // 计算列宽
  // 请求数据
  await getData();
  initPositionList();
  computeDomData(0);
  renderDomByDomDataList(0);
}

init();

</script>
<template>
  <div class="waterfall-container" ref="waterfallContainerRef">
    <div class="container" ref="containerRef">
      <div class="waterfall-item" v-for="item in domDataList" :style="{
        width: item.width + 'px',
        height: item.height + 'px',
        transform: `translate(${item.left}px, ${item.top}px)`,
      }" :key="`item_${item.idx}`">
        <div class="main">{{ item.idx }}</div>
        <div class="footer" :style="{ height: `${item.lineHeight}px` }">
          <div class="text">{{ item.text }}</div>
          <div class="info">@小刚老师 -《寂寞沙洲冷》</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
div {
  box-sizing: border-box
}

.root {
  width: 100%;
  height: 100vh;
  display: flex;
}

.waterfall-container {
  height: 90vh;
  overflow-y: auto;
}

.loading {
  height: 32px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0;
  transition: all .15s;
}

.loading.active {
  opacity: 1;
}



.container {
  position: relative;
  width: 100%;
}

.waterfall-item {
  position: absolute;
  transition: all .12s;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: pink;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.footer {
  box-sizing: border-box;
  padding: 12px;
  background-color: greenyellow;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.info {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  letter-spacing: 0;
}
</style>