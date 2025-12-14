<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import { OverlayScrollbars } from 'overlayscrollbars';

export default {
  name: 'CustomScrollbar',
  data() {
    return {
      osInstance: null
    };
  },
  mounted() {
    this.osInstance = OverlayScrollbars(this.$refs.wrapper, {
        scrollbars: {
          autoHide: 'scroll',
        }
      });
  },
  beforeDestroy() {
    if (this.osInstance) {
      this.osInstance.destroy();
    }
  },
};
</script>

<style scoped>
</style>
