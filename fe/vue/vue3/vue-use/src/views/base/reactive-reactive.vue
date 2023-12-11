<template>
  <div>
    <button @click="state.count++">
      {{ state.count }}
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({count: 0})

</script>

<style lang="scss" scoped>

</style>