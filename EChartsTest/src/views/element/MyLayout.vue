<template>
  <div>
    Layout
    <h3>4等分布局</h3>
    <el-row :gutter='10'>
      <el-col :span='6'><div class="content">1</div></el-col>
      <el-col :span='6'><div class="content">2</div></el-col>
      <el-col :span='6'><div class="content">3</div></el-col>
      <el-col :span='6'><div class="content">4</div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.content{
  font-size: 30px;
  color: brown;
  background-color: #e67e22;
}
</style>