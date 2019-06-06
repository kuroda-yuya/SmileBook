<template>

  <div id="app">
    <!-- <Header/> -->
    <main-header/>
    <chat-tab/>
    <!-- <chat-box/> -->
    <router-view/>
  </div>
</template>

<script>

import HelloWorld from './components/top.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  padding: 40px 0 0 0;
}

body {
  margin: 0;
}
</style>
