<template>
  <Teleport to="body" v-if="type === 'fullScreen'">
    <div class="screen-adapter full-screen" ref="screenAdapter">
      <div class="content-wrapper" :style="style">
        <slot />
      </div>
    </div>
  </Teleport>
  <div
    v-else
    class="screen-adapter"
    :class="{ 'full-screen': props.type === 'fullScreen' }"
    ref="screenAdapter"
  >
    <div class="content-wrapper" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, onMounted, onUnmounted, ref, computed } from 'vue'
import _ from 'lodash'
import { watch } from 'vue'
import { nextTick } from 'vue'
import { StyleValue } from 'vue'
interface IProps {
  width: number
  height: number
  type?: 'fullParent' | 'fullScreen'
  bodyOverflowHidden?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  width: 1920,
  height: 1080,
  type: 'fullParent',
  bodyOverflowHidden: true,
})

const style: StyleValue = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
})

const screenAdapter = ref()
const observerRef = ref()

const hiddenDom = computed(() => {
  return props.type === 'fullScreen' ? document.body : screenAdapter.value.parentNode
})
let overflowHidden = ''

const initBodyStyle = () => {
  if (props.bodyOverflowHidden) {
    overflowHidden = hiddenDom.value.overflow
    hiddenDom.value.style.overflow = 'hidden'
  }
}
const resetBodyStyle = () => {
  if (props.bodyOverflowHidden) {
    hiddenDom.value.style.overflow = overflowHidden
  }
}
const getScreenSize = () => {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }
}
const getParentSize = () => {
  const parent = screenAdapter.value.parentNode
  return {
    width: parent.clientWidth,
    height: parent.clientHeight,
  }
}

// 获取缩放比例
const getScale = () => {
  const { width, height } = props.type === 'fullScreen' ? getScreenSize() : getParentSize()
  const xScale = width / props.width
  const yScale = height / props.height
  return {
    xScale,
    yScale,
  }
}
// 设置缩放比例
const setScale = () => {
  const scale = getScale()
  style.transform = `scale(${scale.xScale}, ${scale.yScale})`
}
const onResize = _.debounce(setScale, 500)

const initMutationObserver = () => {
  const observer = (observerRef.value = new ResizeObserver(() => {
    onResize()
  }))
  observer.observe(hiddenDom.value)
}

watch(
  () => props.type,
  () => {
    nextTick(() => {
      setScale()
    })
  },
)

onMounted(() => {
  initBodyStyle()
  setScale()
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
  }
}

.content-wrapper {
  transform-origin: 0 0;
}
</style>
