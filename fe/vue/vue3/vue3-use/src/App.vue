<template>
  <!-- <BaseOptionsUse /> -->
  <BaseSetupUse />
</template>
<script>
import BaseOptionsUse from "./components/base/Index.vue";
import BaseSetupUse from "./components/baseSetup/Index.vue";
export default {
  name: "app",
  components: {
    BaseOptionsUse,
    BaseSetupUse,
  },
};
</script>
