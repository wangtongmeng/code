<template>
  <div>
    <button @click="onPlatformChange">改变平台</button>
    <button @click="getSubscribeList">获取平台的订阅数据</button>
    <div v-for="item in subscribeList" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { usePlatformStore } from '@/stores/platformStore'
import { useSubscribeStore } from '@/stores/subscribeStore'
import { storeToRefs } from 'pinia'
const platformStore = usePlatformStore()
const subscribeStore = useSubscribeStore()
const { onPlatformChange } = platformStore
const { subscribeList } = storeToRefs(subscribeStore)
const { getSubscribeList } = subscribeStore

getSubscribeList()
</script>

<style scoped lang="scss"></style>
