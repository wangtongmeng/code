<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import Mock from 'mockjs'
import throttle from 'lodash/throttle'



const props = defineProps({
  size: Number, // 固定高高度
  remain: Number, // 保留多少
  items: Array, // 列表数据
  columns: Number, // 瀑布路列宽
  gap: Number // 列间距
})

let items = ref([]);
let mockData = [];
let pageNumber = 1; // 当前页码
for (let i = 0; i < 10000; i++) {
  mockData.push({ id: i, title: Mock.Random.sentence(5, 50) });
}
const viewportRef = ref();
const scrollBarRef = ref();
const positions = ref([]);
const calcTextHeightRef = ref();
let columnsEachHeight = []; // 记录每列的高度
let textList = ref([]); // 每页卡片数据的标题
const isLoading = ref(false);
const start = ref(0);
const end = ref(0);


const getData = ({ pageNumber, pageSize }: { pageNumber: number, pageSize: number }) => {
  return new Promise(resolve => {
    // 根据pageNumber和pageSize从mockData中截取数据
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    setTimeout(() => {
      resolve({
        list: mockData.slice(start, end),
        total: 10000,
      });
    }, 200);
  })
}


// 思路
// 1.初始化获取一页商品信息，滚动到底部，加载下一页数据
// 2.根据返回的数据，计算出卡片高度
// 3.瀑布流目前是2列，每次将卡片放到最短的那列
const columnWidth = computed(() => {
  if (!viewportRef.value) return 0;
  let gapTotal = (props.gap * props.columns) - props.gap;
  let columnWidth = (viewportRef.value.clientWidth - gapTotal) / props.columns;
  return columnWidth;
})

// 计算卡片位置，放到最短的那列
const computePosition = (textHeightList) => {
  for (let i = 0; i < textHeightList.length; i++) {
    let item = items.value[i];
    if (positions.value.length === 0) {
      let info = {
        id: item.id,
        top: 0,
        left: 0,
        width: columnWidth.value,
        // 1:1图片的高度+标题的高度30
        height: columnWidth.value + textHeightList[i],
        title: item.title,
      }
      info.bottom = info.top + info.height;
      positions.value.push(info)
      // 更新每列的高度
      columnsEachHeight[0] = info.bottom;
    } else if (positions.value.length === 1) {
      let info = {
        id: item.id,
        top: 0,
        left: columnWidth.value + props.gap,
        width: columnWidth.value,
        // 1:1图片的高度+标题的高度30
        height: columnWidth.value + textHeightList[i],
        title: item.title,
      }
      info.bottom = info.top + info.height;
      positions.value.push(info)
      // 更新每列的高度
      columnsEachHeight[1] = info.bottom;
    } else {
      // 找到最短的那列
      let minHeight = Math.min(...columnsEachHeight);
      let minIndex = columnsEachHeight.indexOf(minHeight);
      let info = {
        id: item.id,
        top: minHeight,
        left: columnWidth.value * minIndex + props.gap * minIndex,
        width: columnWidth.value,
        // 1:1图片的高度+标题的高度30
        height: columnWidth.value + textHeightList[i],
        title: item.title,
      }
      info.bottom = info.top + info.height;
      positions.value.push(info)
      // 更新每列的高度
      columnsEachHeight[minIndex] = info.bottom;
    }
  }
  // 更新scrolbar的高度
  let maxHeight = Math.max(...columnsEachHeight);
  scrollBarRef.value.style.height = `${maxHeight}px`;
}

const getStartIndex = (value) => { // 查找当前滚动需要找到值
  let start = 0; // 开始
  let end = positions.value.length - 1; // 结束位置
  let temp = null;
  while (start <= end) {
    let middleIndex = parseInt((start + end) / 2);
    let middleValue = positions.value[middleIndex].bottom; // 找到当前的中间元素的结尾
    if (middleValue === value) {
      return middleIndex + 1;
    } else if (middleValue < value) {
      start = middleIndex + 1;
    } else if (middleValue > value) {
      if (temp == null || temp > middleIndex) {
        temp = middleIndex; // 找范围 比如value是小数时 33.5
      }
      end = middleIndex - 1;
    }
  }

  return temp;
}
const getEndIndex = (value) => { // value 是可视区域的底部高度
  let start = 0; // 开始
  let end = positions.value.length - 1; // 结束位置
  while (start <= end) {
    let middleIndex = parseInt((start + end) / 2);
    let middleValue = positions.value[middleIndex].top; // 找到当前的中间元素的结尾
    if (middleValue === value) {
      return middleIndex - 1;
    } else if (middleValue > value) {
      end = middleIndex - 1;
    } else if (middleValue < value) {
      start = middleIndex + 1;
    }
  }
  return start;

}

const onScroll = throttle(() => {

  let scrollTop = viewportRef.value.scrollTop;
  // 找到不和可视区域相交的卡片的最小区间
  let startIndex = getStartIndex(scrollTop) || 0;
  let endIndex = getEndIndex(scrollTop + viewportRef.value.clientHeight);
  start.value = startIndex  < 4 ? 0 : startIndex - 4;
  end.value = endIndex > positions.value.length - 4 ? endIndex : endIndex + 4;
  // 监听滚动到底部，加载下一页数据
  if (viewportRef.value.scrollTop + viewportRef.value.clientHeight + 10 >= viewportRef.value.scrollHeight) {
    if (isLoading.value) return;
    pageNumber++;
    isLoading.value = true;
    getData({ pageNumber, pageSize: 10 }).then(res => {
      isLoading.value = false;
      items.value = res.list;
      textList.value = res.list.map(item => ({ title: item.title, id: item.id }));
      nextTick(() => {
        // 获取 calcTextHeightRef.value 节点下所有子节点的高度
        let textHeightList = [];
        for (let i = 0; i < textList.value.length; i++) {
          textHeightList[i] = calcTextHeightRef.value.children[i].offsetHeight;
        }
        textList.value = [];
        computePosition(textHeightList);
      })
    })
  }
}, 200)

const visibleData = computed(() => {
  if (!start.value && !end.value) return positions.value;
  return positions.value.slice(start.value, end.value);
})

onMounted(async () => {
  // 确定viewport高度 瀑布流先写死
  const res = await getData({ pageNumber, pageSize: 10 })
  items.value = res.list;
  textList.value = res.list.map(item => ({ title: item.title, id: item.id }));
  nextTick(() => {
    // 获取 calcTextHeightRef.value 节点下所有子节点的高度
    let textHeightList = [];

    for (let i = 0; i < textList.value.length; i++) {
      textHeightList[i] = calcTextHeightRef.value.children[i].offsetHeight;
    }
    textList.value = [];
    computePosition(textHeightList);
  })
})
</script>
<template>
  <div class="viewport" ref="viewportRef" @scroll="onScroll">
    <div class="scroll-bar" ref="scrollBarRef"></div>
    <div class="scroll-list">
      <div v-for="item in visibleData" :key="item.id" :vid="item.id" ref="itemsRef">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
  <div v-if="columnWidth" class="calcTextHeight" ref="calcTextHeightRef" :style="{ width: `${columnWidth}px` }">
    <div v-for="item in textList" :key="item.id" :id="item.id">{{ item.title }}</div>
  </div>
</template>
<style lang="less" scoped>
.viewport {
  overflow-y: scroll;
  position: relative;
  height: 500px;
  border: 1px solid red;
}

.scroll-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.calcTextHeight {
  height: 0;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  visibility: hidden; 
  left: 10000px;
}
</style>