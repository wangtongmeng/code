<template>
  <div>
    子组件
  </div>
</template>
<script>
import {defineComponent, onMounted} from '@vue/composition-api';
export default defineComponent({
  name: 'Child',
  setup() {
    onMounted(() => {
      console.log('子组件挂载')
    })
  }
})
</script>