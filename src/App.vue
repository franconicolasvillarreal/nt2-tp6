<template>
  <div id="app" class="container-fluid">
    <div class="jumbotron">
      <h1>NT2-TP6</h1>
      <br>
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c3e;
  margin-top: 60px;
}
</style>
