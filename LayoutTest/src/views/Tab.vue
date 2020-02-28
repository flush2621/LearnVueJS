<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" width="150px" style="background-color: rgb(238, 241, 246)" router> 
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/rank">排行榜</el-menu-item>
      <el-menu-item index="/usercenter">个人中心</el-menu-item>
      <el-menu-item index="/helloworld">Hello</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    data() {
      return{
        activeIndex: '/home'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key,keyPath)
      }
    }
  }
</script>

<style scoped>
.logo{
  height: 56px;
}
a{
  text-decoration: none;
}
.router-link-active{
  text-decoration: none;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-item{
  padding-right: 100px !important;
}
</style>