<template>
  <div class="lay1">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <!-- <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col> -->
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <transition name="el-fade-in-linear">
    <el-row v-show="show">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    </transition>
    <el-row>
      <el-col :span="10" :offset="6" style="border:1px">
        <el-button style="width:100px;" @click="exchg">click</el-button>
        <el-button style="width:100px;">dbclick</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        show: true,
      }
    },
    methods: {
      exchg() {
        this.show = !this.show
        console.log(this.show)
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>