<template>
  <div class="about">
    <CompOne />
  </div>
</template>

<script>
import { defineComponent, onActivated, onMounted } from '@vue/composition-api'
import CompOne from '../components/comp-one.vue'

export default defineComponent({
  name: 'AView',
  components: {
    CompOne
  },
  setup() {
    onActivated(() => {
      console.log('a activated')
    })
    onMounted(() => {
      console.log('a mounted')
    })
  }
})
</script>

<style scoped>
</style>