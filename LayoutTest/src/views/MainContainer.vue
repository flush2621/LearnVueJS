<template>
  <div>
    <el-container>
      <el-aside width="150px" style="background-color: rgb(238, 241, 246)">
        <tab></tab>
      </el-aside>
      <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>
          
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Tab from '../views/Tab'
  export default {
    components: {
      Tab
    }
  }
</script>

<style scoped>
.el-container {
  height: 750px;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

</style>