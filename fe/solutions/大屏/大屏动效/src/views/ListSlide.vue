<template>
  <div>
    <h3>列表轮播</h3>
    <!-- Slider main container -->
    <swiper :slidesPerView="3" :spaceBetween="5" :speed="500" :autoplay="{delay: 2000}"
    :modules="[Autoplay]"
    direction="vertical"  loop class="swiper"
      @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide" v-for="({ text, date }, index) of list" :key="index">{{ text }} - {{ date }}</swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay} from 'swiper/modules'

const list = ref([
  { text: '联电拧紧_长螺栓拧紧_合格率1', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率2', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率3', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格4', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率5', date: '2024-01-18 10:21' },
  { text: '联电拧紧_长螺栓拧紧_合格率6', date: '2024-01-18 10:21' },
])

const onSwiper = (swiper) => {
  console.log('onSwiper', swiper);
}

const onSlideChange = (x) => {
  console.log('realIndex', x.realIndex);
}

onMounted(() => {
  // initSwiper()
})
</script>

<style lang="scss" scoped>
.swiper {
  width: 600px;
  height: 300px;
  border: 1px solid red;
}

.swiper-slide {
  border: 1px solid red;
}
</style>