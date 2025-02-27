<template>
  <!-- <div style="height:40px;border:1px solid red;">{{item.value}}</div> -->
  <div style="border:1px solid red;padding: 20px 0">{{item.id}}  {{item.value}}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  item: Object,
})
</script>