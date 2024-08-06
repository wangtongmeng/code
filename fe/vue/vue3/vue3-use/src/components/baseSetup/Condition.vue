<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>

    <button @click="onClick">change</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const type = ref("a");
const onClick = () => {
  type.value = type.value === "a" ? "b" : "a";
};
</script>
