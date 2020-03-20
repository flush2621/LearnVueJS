<template>
  <div id="app">
    <!-- <loginPage></loginPage> -->
    <!-- <mainContainer></mainContainer> -->
    <router-view/>
  </div>
</template>

<script>
import MainContainer from './views/MainContainer'
import LoginPage from './views/Login'
export default {
  name: 'App',
  components: {
    MainContainer,
    LoginPage
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  /* background-image: linear-gradient(to bottom,#243949,#517fa4); */
  background:
  linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
  linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
  background-color:#708090;
  background-size: 64px 128px;
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
