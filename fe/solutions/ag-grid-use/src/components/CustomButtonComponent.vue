<template>
  <div v-if="params.node.group">
    <button v-on:click="buttonClicked">Launch!</button>
  </div>
  <div v-else></div>
</template>

<script setup>
import { toRaw } from "vue";

const props = defineProps({});
console.log("props", toRaw(props.params.node.group), toRaw(props.params));
const buttonClicked = () => {
  console.log("click");
};
</script>

<style lang="scss" scoped></style>
