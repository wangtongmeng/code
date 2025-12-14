<template>
  <div>
    <button @click="onVisibleToggle">显示隐藏</button>
    <custom-scrollbar v-if="visible" ref="hello" class="hello">
      <div v-for="index in 100" :key="index" class="content-item">{{ index }}</div>
    </custom-scrollbar >
      <br>
    <custom-scrollbar v-if="visible" ref="hello" class="hello">
      <div v-for="index in 100" :key="index" class="content-item">{{ index }}</div>
    </custom-scrollbar >
  </div>
</template>

<script>
import CustomScrollbar from './CustomScrollbar.vue';
export default {
  name: 'OverlayScrollbarUse',
  components: {
    CustomScrollbar
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    onVisibleToggle() {
      this.visible = !this.visible;
    }
  },
}
</script>

<style scoped>
.hello {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
.content-item {
  /* width: 400px; */
}

</style>
