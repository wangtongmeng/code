<script setup lang="ts">
import VirtualList from './components/virtual-list.vue';
import Item from './components/item.vue';
import Waterfall from './components/Waterfall.vue';
import { getList } from './mock';
import Mock from 'mockjs'
import VirtualWaterfall from './components/virtual-waterfall.vue';
import Card from './components/card.vue';
let items = []
for (let i = 0; i < 10000; i++) {
  // items.push({id: i,  value: i});
  items.push({id: i,  value: Mock.Random.sentence(5, 50)});
}
</script>

<template>
  <!-- <Waterfall :columns="2" :request="getList" /> -->
   <!-- 1.告诉我列表的每一项高，算出一个滚动条来 -->
    <!-- 2.variable 这个高度不一定多高 -->
   <!-- <VirtualList :size="40" :remain="8" :items="items" :variable="true">
     <template v-slot="{item}">
         <Item :item="item" />
       </template>
   </VirtualList> -->
   <VirtualWaterfall :columns="2" :remain="10" :size="40" :gap="10" >
       <template v-slot="{item}">
         <Card :item="item" />
       </template>
   </VirtualWaterfall>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
