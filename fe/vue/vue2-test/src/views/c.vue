<template>
  <div class="home">
    <h1>首页</h1>
    <p>欢迎访问首页！这是通过路由懒加载的页面。</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #2c3e50;
}
</style>