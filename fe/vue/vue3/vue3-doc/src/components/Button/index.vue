<template>
  <button :size="size" :types="types">
    <!-- 插槽 -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  size: "large" | "medium" | "small";
  types: "primary" | "default";
}
defineProps<IProps>();
</script>

<style scoped></style>
