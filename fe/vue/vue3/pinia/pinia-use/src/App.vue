<script setup>
import OptComp from './views/OptComp.vue';
import SetupComp from './views/SetupComp.vue';
import OptCompWithSetup from './views/OptCompWithSetup.vue';
</script>

<template>
  <SetupComp />
  <div>=======组件用options api，通过映射辅助函数使用Store</div>
  <OptComp />
  <div>=======组件用options api，使用Setup辅助</div>
  <OptCompWithSetup />
</template>

<style scoped>

</style>
