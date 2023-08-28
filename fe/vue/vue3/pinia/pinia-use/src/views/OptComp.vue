<template>
  <div>属性 通过mapStores映射后 直接通过store访问 {{ counterStore.count }}</div>
  <div>属性 通过mapState映射后 访问 {{ count }}</div>
  <div>属性 通过mapState映射后 重命名 {{ myCount }}</div>
  <div>计算属性 通过mapStores映射后  直接通过store访问 {{ counterStore.double }}</div>
  <div>计算属性 通过mapState映射后  访问 {{ double}}</div>  
  <div>计算属性 通过mapState映射后  重命名 {{ myDouble}}</div>  
  <div>计算属性 通过mapState映射后  使用函数获取store中的getters {{ double2 }}</div>  
  <div>计算属性 通过mapState映射后  计算属性同时访问store和this {{ magicValue }}</div>
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
  <button @click="">actions 通过mapStores映射后 直接通过store访问</button>
</template>
<script>
import { defineComponent } from 'vue';
import {mapStores, mapState, mapActions, mapWritableState} from 'pinia'
import {useCounterStore} from '@/stores/counter'
import {useUserStore} from '@/stores/user'


export default defineComponent({
  computed: {
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // 允许读取 this.count 和 this.double
    ...mapState(useCounterStore, ['count', 'double', 'items']),
    // mapState接收对象
    ...mapState(useCounterStore, {
      myCount: 'count', // 重命名
      myDouble: 'double',
      double2: store => store.double * 2, // 函数的方式，通过store访问
      magicValue (store) { // 访问store和this
        return store.count + this.count + this.double
      }
    }),
    // this.num++ 与从 store.num 中读取的数据相同
    ...mapWritableState(useCounterStore, ['num']),
    // 重命名
    ...mapWritableState(useCounterStore, {
      myNum: 'num'
    })
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(useCounterStore, {myIncrement: 'increment'}),
    reset () {
      // 在选项式api中，重置store中的state
      const counter = useCounterStore()
      counter.$reset()
    },
    addNum () {
      const counter = useCounterStore()
      // 更新数据
      // 1.方式1
      // this.num++
      // 2.通过$patch

      // counter.$patch({
      //   num: counter.num + 2,
      //   count: counter.count + 1,
      // })

      //3.$patch函数的方式
      // counter.$patch((state) => {
      //   state.items.push({name: '王五'})
      //   state.count++
      // })
      // 4.替换state 在它内部调用 `$patch()`：
      counter.$state = {count: 1, num: 2, items: [{name: '赵六'}]}
    }
  }
})
</script>

<style scoped>
button {
  display: block;
}
li {
  display: inline-block;
}
</style>