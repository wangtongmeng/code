<template>
  <div class="contact">
    <div @click="onClick">新开tab跳转a页面</div>
  </div>
</template>

<script>
import { defineComponent, onActivated, onMounted } from '@vue/composition-api'

export default defineComponent({
  name: 'b',
  setup() {

    onActivated(() => {
      console.log('b activated')
    })
    onMounted(() => {
      console.log('b mounted')
    })
    const onClick = () => {
      window.open('http://localhost:8080/a', '_blank')
    }

    return {
      onClick,
    }
  },
})
</script>

<style scoped>
</style>