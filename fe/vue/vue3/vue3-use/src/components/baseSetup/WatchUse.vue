<template>
  <input v-model="state.name" />
  <input v-model="state.info.city" />
</template>
<script setup>
import { reactive, watch } from "vue";
const state = reactive({
  name: "lisi",
  info: {
    city: "北京",
  },
});
watch(
  () => state.name,
  (val, oldVal) => {
    console.log("watch name", val, oldVal);
  }
);
watch(
  () => state.info,
  (val, oldVal) => {
    console.log("watch info", oldVal, val);
  },
  { deep: true }
);
</script>
