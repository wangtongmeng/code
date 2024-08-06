<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <input v-model="double2" />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const num = ref(20);
const double1 = computed(() => num.value * 2);
const double2 = computed({
  get() {
    return num.value * 2;
  },
  set(val) {
    console.log(val);
    num.value = val;
  },
});
</script>
