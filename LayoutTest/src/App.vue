<template>
  <div id="app">
    <!-- <mainContainer></mainContainer> -->
    <router-view/>
  </div>
</template>

<script>
import MainContainer from './views/MainContainer'
export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
/* *{
  margin: 0;
  padding: 0;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
