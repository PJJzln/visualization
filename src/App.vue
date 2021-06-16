<template>
  <div id="app">
    <!-- <Home/> -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import Home from './pages/home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
</style>
