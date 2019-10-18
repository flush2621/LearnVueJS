<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr>
    <div class="myDivClass">Hello Everybody!</div>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/player/1">库里</router-link>
      <router-link to="/player/2">哈登</router-link>
    </p>
    <router-view/>
  </div> -->
  <div id="app">
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color: darkgoldenrod">
          <router-view name="myHeader"></router-view>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color: thistle">
          <router-view name="mySiderbar"></router-view>
        </td>
        <td width="80%" style="background-color: aquamarine">
          <router-view name="myDetail"></router-view>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
