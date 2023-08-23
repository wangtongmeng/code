
<template>
 <div>home</div>
 <div>{{ name }}</div>
</template>

<script>
import {useStore} from 'vuex'
import {toRefs} from 'vue'
export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const {name} = toRefs(store.state)
    return {name}
  }
}
</script>
