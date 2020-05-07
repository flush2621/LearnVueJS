<template>
  <div>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="colorblock">
          <span class="title">登&#12288录</span>
        </div>
        <!-- <div slot="header" class="clearfix">
          <span class="title">登陆</span>
        </div> -->
        <table style="padding-left:20px;transform:translateY(-15px);">
          <tr>
            <td align="left" style="color:white">用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td align="left" style="color:white;">密&#12288码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行 -->
            <td colspan="2" style="padding-top:10px;">
              <el-button style="width:150px" type="primary" @click="doLogin">登&#12288&#12288陆</el-button>
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
      open() {
        this.$message('登陆失败,用户名或者密码有误!');
      },
      doLogin() {
        // alert(JSON.stringify(this.user))
        // this.$http.post('/api/dataFactory',this.user).then((response) => {
        // this.$http.get('http://148.20.30.12:8081/maven_web/dataFactory',this.user).then((response) => {
        // this.$http.post('http://148.20.30.12:8081/maven_web/dataFactory',this.user,{emulateJSON:true}).then((response) => {
        // this.$http.post('http://148.20.30.12:8989/login/login2',this.user,{emulateJSON:true}).then((response) => {
        //   let info = response.data
        //   console.log(info)
        //   if(info.data.length)
        //     this.$router.push('index')
        //   else
        //     this.open()
        // }).catch(function(response){
        //   console.log('error')
        // })
        //****************//
        // let params = new URLSearchParams() //RequestParam需要的类型，而RequestBody需要this.user
        // params.append('username',this.user.username)
        // params.append('password',this.user.password)
        this.$ajax.post('/login/login2',this.user).then((response) => {
          let info = response.data
          console.log(info)
        }).catch(function(response){
          console.log('error')
        })
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
    margin-top: 200px;
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
    background: linear-gradient(#fff1eb,#ace0f9);
    /* background: linear-gradient(#243949,#517fa4); */
    /* opacity: .9; */
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
    border-radius: 20px;
    background:linear-gradient(to right, #bb313e25, #bb313e25, #d7222925, #dd4a1625, #e4761525, #f5c50025, #f0e92725, #b1ce2425, #48a93525, #03944525, #157c4f25, #176a5825, #1b556325, #1d386f25, #1d386f25, #20277825, #52266325, #8a244b25);
    /* background: #d5f3f425; */
  }
</style>