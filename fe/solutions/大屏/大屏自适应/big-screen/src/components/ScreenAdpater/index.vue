<template>
  <div class="screen-adapter">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps({
    w: { type: Number, required: true },
    h: { type: Number, required: true },
  }),
  { w: 1600, h: 1200 }
)

</script>

<style lang="scss" scoped>
.screen-adapter {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  // min-height: 100%;
  // max-height: 100vh;
}
</style>