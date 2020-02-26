<template>
  <div class="lay2">
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="999">
              <template slot="title">
                  <i class="el-icon-platform-eleme"></i>
                  <span class="el-submenu-name">音视频后台管理</span>
              </template>
              <el-menu-item index="9996" :route="{ path: '/balancing' }">
                  <span class="el-menu-item-name">负载均衡</span>
              </el-menu-item>
              <el-menu-item route="/mediaService" index="9998">
                  <span class="el-menu-item-name">流媒体服务</span>
              </el-menu-item>

              <el-menu-item route="/trans" index="9999">
                  <span class="el-menu-item-name">转码服务</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>