<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, ref } from 'vue';
import throttle from 'lodash/throttle';

const props = defineProps({
  size: Number, // 当前每一项的高度
  remain: Number, // 可见多少个
  items:Array,
  variable: Boolean
})
const viewport = ref();
const scrollBar = ref();
const itemsRef = ref();
const start = ref(0);
const end = ref(props.remain) // 默认显示8个
const offset = ref(0);
const positions = ref([]);


// 可见数据有哪些
const visibleData = computed(() => {
  let newStart = start.value - prevCount.value;
  let newEnd = end.value + nextCount.value;
  return props.items?.slice(newStart, newEnd);
})
// 渲染三屏
const prevCount = computed(() => { // 前面预留几个
  return Math.min(start.value, props.remain); // 如果一屏不够，则取start
})
const nextCount = computed(() => {
  return Math.min(props.remain, props.items.length - end.value); // 如果一屏不够，则取剩下的
})
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

const handleScroll = () => {
  // 1.算出来当前滚过去几个了，当前应该从第几个开始显示
  let scrollTop = viewport.value.scrollTop;
  if (props.variable) {
    // 如果是可变高度，要是用二分查找找到对应的纪录
    start.value = getStartIndex(scrollTop)
    end.value = start.value + props.remain;
    // 设置偏移量
    offset.value = positions.value[start.value - prevCount.value] ? positions.value[start.value - prevCount.value].top : 0;
  } else {
    // 2.获取当前应该从第几个开始渲染
    start.value = Math.floor(scrollTop / props.size);
    // 3.再计算当前结尾的位置
    end.value = start.value + props.remain; // 当前可渲染的区域
    // 定位当前的可视区域，让当前渲染的内容在当前的viewport的可视区域内
    offset.value = start.value * props.size - props.size * prevCount.value; // 如果有预留渲染，应该把位置再向上移动预留位置这么多
  }
};
const scrollFn = throttle(handleScroll, 200, {leading: false }); // leading: true 第一次不触发

const cacheList = () => { // 缓存当前项的高度和top值还有bottom
  positions.value = props.items?.map((item, index) => ({
    height: props.size,
    top: index * props.size,
    bottom: (index + 1) * props.size
  }))
}

onMounted(() => {
  viewport.value.style.height = props.size * props.remain + 'px';
  scrollBar.value.style.height = props.items?.length * props.size + 'px'

  // 如果加载完毕，需要缓存每一项的高度
  cacheList(); // 先记录好（初始化），等滚动时，去渲染页面时获取真实dom的高度，来更新缓存的内容
  // 再重新计算滚动条的高度
})

onUpdated(() => {
  // 页面渲染完成后，根据当前展示的数据 更新缓存区的内容
  nextTick(() => {
    // 根据当前显示的 更新缓存中的 height bottom top，最终更新滚动条的高度
    let nodes = itemsRef.value; // 获取真实的节点
    if (!(nodes && nodes.length > 0)) {
      return;
    }
    nodes.forEach(node => {
      let {height} = node.getBoundingClientRect(); // 真实的高度
      // 更新老的高度
      let id = node.getAttribute('vid') - 0;
      let oldHeight = positions.value[id].height;
      let val = oldHeight - height; // 计算当前的高度是否和之前的有变化
      if (val) {
        positions.value[id].height = height; // 更新高度
        positions.value[id].bottom = positions.value[id].bottom - val; // 更新底部的高度
        // 后续所有节点的top和botom（位置信息）更新
        for (let i = id + 1; i < positions.value.length; i++) {
          positions.value[i].top = positions.value[i - 1].bottom;
          positions.value[i].bottom -= val;
        }
        // 更新滚动条的高度
        scrollBar.value.style.height = positions.value[positions.value.length - 1].bottom + 'px';
      }
    })

  })
})
</script>
<template>
  <div class="viewport" ref="viewport" @scroll="scrollFn">
    <!-- 自定义滚动条 -->
    <div class="scroll-bar" ref="scrollBar"></div>
    <!-- 真实渲染的内容 -->
    <div class="scroll-list" :style="{transform: `translate3d(0, ${offset}px, 0)`}">
      <div v-for="item in visibleData" :key="item.id" :vid="item.id" ref="itemsRef">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.viewport {
  overflow-y: scroll;
  position: relative;
}
.scroll-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>