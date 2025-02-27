<template>
  <div
    class="goods-item"
    :style="{
      transform: `translate3d(${item.left}px, ${item.top}px, 0)`,
      width: `${item.width}px`,
      height: `${item.height}px`,
    }"
  >
    <div class="goods-cover"></div>
    <div class="goods-title">{{ item.title }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  item: Object,
})
</script>
<style scoped lang="less">
.goods-item {
  position: absolute;
  box-sizing: border-box;
}
.goods-cover {
  // 高度和宽度1:1
  width: 100%;
  padding-top: 100%;
  background-color: #f5f5f5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
}

.goods-title {

}

</style>