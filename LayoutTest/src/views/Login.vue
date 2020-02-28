<template>
  <div>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="colorblock">
          <span class="title">登陆</span>
        </div>
        <!-- <div slot="header" class="clearfix">
          <span class="title">登陆</span>
        </div> -->
        <table style="padding-left:20px;">
          <tr>
            <td align="right">用户名:</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td align="right">密码:</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行 -->
            <td colspan="2">
              <el-button style="width:150px" type="primary" @click="doLogin">登陆</el-button>
              <el-button style="width:150px" type="primary">忘记密码</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: 'zhangsan',
          password: '123'
        }
      }
    },
    methods: {
      doLogin() {
        alert(JSON.stringify(this.user))
      }
    }
  }
</script>

<style scoped>
  .title{
    font-family: KaiTi;
    font-size: 30px;
  }
  .login{
    display: flex;
    justify-content: center;
    margin-top: 150px;
  }
  .text {
    font-size: 14px;
  }
  .colorblock{
    position: relative;
    width: 400px;
    height: 50px;
    padding-top: 20px;
    transform: translate(-20px,-20px);
    background: #7f8c8d;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
    background: #ecf0f1;
  }
</style>