<template>
  <div>
    <button v-on:click="shuffle">Shuffle</button>
    <div class="flip-list-move">
      <transition-group name="flip-list" tag="ul">
        <li class="list-item" v-for="item in list" :key="item.text">{{ item.text }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay} from 'swiper/modules'
import _ from 'lodash'
let data = [
  { text: '联电拧紧_长螺栓拧紧_合格率1', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率2', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率3', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格4', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率5', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率6', date: '2024-01-18 10:21' },
]
const list = ref([])

const shuffle = () => {
  list.value = _.shuffle(list.value)
}

onMounted(() => {
  let count = 0
  setInterval(() => {
    if (data[count]) {
      list.value.unshift(data[count])
      count++
    }
  }, 1000);
})
</script>

<style lang="scss" scoped>
ul {
  margin-left: 100px;
}
.list-item {
  height: 60px;
  width: 200px;
  padding: 4px;
  background-color: aquamarine;
  margin-bottom: 10px;
}
.flip-list-move {
  transition: transform 1s;
}
</style>