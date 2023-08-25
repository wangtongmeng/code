<template>
  <div>{{ count }}</div>
  <div>计算属性{{ double }}</div>
  <button @click="increment">加1</button>
</template>
<script>
import { defineComponent } from 'vue';
import {mapStores, mapState, mapActions} from 'pinia'
import {useCounterStore} from '@/stores/counter'
import {useUserStore} from '@/stores/user'

export default defineComponent({
  computed: {
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // 允许读取 this.count 和 this.double
    ...mapState(useCounterStore, ['count', 'double'])
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(useCounterStore, ['increment'])
  }
})
</script>