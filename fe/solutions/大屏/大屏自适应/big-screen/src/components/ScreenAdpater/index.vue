<template>
  <div class="screen-adapter">
    <div class="content-wrapper" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps, withDefaults, reactive, onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

const props = defineProps({
    // 设计稿宽度
    w: { type: Number, required: true, default: 1600 },
    // 设计稿高度
    h: { type: Number, required: true, default: 1200 },
  })

const style = reactive({
  width: `${props.w}px`,
  height: `${props.h}px`,
  transform: 'scale(1) translate(-50%, -50%)'
})

onMounted(() => {
  setScale()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

// 获取缩放比例
const getScale = () => {
  const w = document.body.clientWidth / props.w
  const h = document.body.clientHeight / props.h
  return w < h ? w : h
}
// 设置缩放比例
const setScale = () => {
  style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}
const onResize = _.debounce(setScale, 200)

</script>

<style lang="scss" scoped>
.screen-adapter {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  overflow: hidden;
}

.content-wrapper {
  transform-origin: 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  // overflow: hidden;
}
</style>