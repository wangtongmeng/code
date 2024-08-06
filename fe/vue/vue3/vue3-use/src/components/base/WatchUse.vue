<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "lisi",
      info: {
        city: "北京",
      },
    };
  },
  watch: {
    // 监听值类型
    name(oldVal, val) {
      console.log("watch name", oldVal, val);
    },
    // 监听复杂类型
    info: {
      handler(oldVal, val) {
        console.log("watch info", oldVal, val);
      },
      deep: true, // 深度监听
    },
  },
};
</script>
