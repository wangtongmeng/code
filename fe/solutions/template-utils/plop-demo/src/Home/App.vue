<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'HomePage',
  components: {
    HomeComponent
  }
};
</script>

<style scoped>
</style>