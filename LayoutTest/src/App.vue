<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './views/Tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
