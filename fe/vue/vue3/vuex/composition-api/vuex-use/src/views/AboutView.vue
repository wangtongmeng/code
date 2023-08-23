<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ name }}</div>
    <button @click="onClick">点击 改变名字</button>
  </div>
</template>


<script>
import {useStore} from 'vuex'
import {toRefs} from 'vue'
export default {
  name: 'About',
  setup() {
    const store = useStore()
    const {name} = toRefs(store.state)
    const onClick = () => {
      store.dispatch('getData')
    }
    return {name, onClick}
  }
}
</script>


