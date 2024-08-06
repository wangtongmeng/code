<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment1(event) {
      this.num++;
    },
    increment2(val, event) {
      this.num += val;
    },
    loadHandler() {
      console.log("load");
    },
  },
  mounted() {
    window.addEventListener("load", this.loadHandler);
  },
  unmounted() {
    // 【注意】 用 vue 绑定的事件，组件销毁时会自动被解绑
    // 自己绑定的事件，需要自己销毁！！
    window.removeEventListener("load", this.loadHandler);
  },
};
</script>
