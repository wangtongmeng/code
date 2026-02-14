<template>
  <div id="app">
    <nav>
      <img alt="Vue logo" src="./assets/logo.png">
      <div class="nav-links">
        <router-link to="/a">页面a</router-link>
        <router-link to="/b">页面b</router-link>
        <router-link to="/c">页面c</router-link>
      </div>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

nav {
  margin-bottom: 40px;
}

nav img {
  width: 100px;
  margin-bottom: 20px;
}

.nav-links {
  margin-top: 20px;
}

.nav-links a {
  display: inline-block;
  margin: 0 15px;
  padding: 10px 20px;
  text-decoration: none;
  color: #2c3e50;
  border: 1px solid #42b983;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-links a:hover {
  background-color: #42b983;
  color: white;
}

.nav-links a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}
</style>
