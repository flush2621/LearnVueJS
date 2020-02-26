<template>
  <div id="app">
    <!-- This is App -->
    <!-- <button @click="passMsg">Pass Msg</button>
    <m-parent :msg1="a" :msg2="b" :msg3="c"></m-parent> -->
    <!-- <router-link to="/home">home</router-link>
    <button @click="toHome">home</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default {
  data() {
    return {
      a: 'app data is a',
      b: 'app data is b',
      c: 'app data is c',
    }
  },
  components: {
    MParent,
  },
  methods: {
    passMsg() {
      bus.$emit('msg','i am from app')
    },
    toHome() {
      // this.$router.push({ path: '/home/345' })
      // this.$router.push({path: '/home', query: {name: 'jack'} })
      this.$router.push({name: 'home', params: {id: 3}})
    }
  },
}
</script>

<style scoped>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  /* overflow: hidden; */
}
#app{
  /* width: 100%; */
  /* margin: 0;
  padding: 0; */
  height: 100%;
  /* margin-top: 0px;
  padding-top: 0px;
  border: 0px; */
  background: #409EFF;
  /* border: 1px solid; */
}
</style>
