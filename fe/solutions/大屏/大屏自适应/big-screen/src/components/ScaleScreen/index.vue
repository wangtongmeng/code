<template>
  <div class="screen-adapter" :class="{'full-screen': type === 'fullScreen'}" ref="screenAdapter">
    <div class="content-wrapper" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, onMounted, onUnmounted, ref, computed } from 'vue'
import _ from 'lodash'

const props = defineProps({
  // 设计稿宽度
  width: {
    type: Number,
    default: 1920,
    required: true
  },
  // 设计稿高度
  height: {
    type: Number,
    default: 1080,
    required: true
  },
  type: {
    type: String,
    default: 'fullParent'
    // 'fullScreen' 'fullParent' 'autoScale'
  },
  bodyOverflowHidden: {
    type: Boolean,
    default: true
  },
})

const style = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
})

const screenAdapter = ref()
const observerRef = ref()

const hiddenDom = computed(() => {
  return props.type === 'fullScreen' ?  document.body : screenAdapter.value.parentNode
})
let bodyOverflowHidden

const initBodyStyle = () => {
  if (props.bodyOverflowHidden) {
    bodyOverflowHidden = hiddenDom.value.overflow
    hiddenDom.value.style.overflow = 'hidden'
  }
}
const resetBodyStyle = () => {
  if (props.bodyOverflowHidden) {
    hiddenDom.value.style.overflow = bodyOverflowHidden
  }
}
const getScreenSize = () => {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
}
const getParentSize = () => {
  const parent = screenAdapter.value.parentNode
  return {
    width: parent.clientWidth,
    height: parent.clientHeight
  }
}

// 获取缩放比例
const getScale = () => {
  // debugger
  const { width, height } = props.type === 'fullScreen' ? getScreenSize() : getParentSize()
  const xScale = width / props.width
  const yScale = height / props.height
  return {
    xScale,
    yScale
  }
}
// 设置缩放比例
const setScale = () => {
  const scale = getScale()
  console.log('scale', scale);
  style.transform = `scale(${scale.xScale}, ${scale.yScale})`
}
const onResize = _.debounce(setScale, 500)

const initMutationObserver = () => {
  const observer = (observerRef.value = new ResizeObserver(() => {
    onResize()
  }))
  console.log('hiddenDom.value', hiddenDom.value);
  observer.observe(hiddenDom.value)
}

onMounted(() => {
  initBodyStyle()
  setScale()
  const parent = screenAdapter.value.parentNode
  console.log(parent.clientWidth, parent.clientHeight);
  window.addEventListener('resize', onResize)
  initMutationObserver()
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  resetBodyStyle()
  observerRef.value?.disconnect()
})

</script>

<style lang="scss" scoped>
.screen-adapter {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  overflow: hidden;
  &.full-screen {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.content-wrapper {
  transform-origin: 0 0;
}
</style>