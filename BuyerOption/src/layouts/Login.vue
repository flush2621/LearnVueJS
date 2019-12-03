<template>
  <div class="courseLogo">
    <div id="loginformA" class="login-formA">
      <div class="avatarimg fixed-top-center">
        <q-avatar class="q-mb-sm fingers">
          <img src="statics/china-print.png">
        </q-avatar>
        <div float class="ctn" @click="overturn">
          <span style="text-decoration:underline; cursor:pointer;">修改密码</span>
          </div>
      </div>    

      <div class="txtb">
        <input v-model="usr" type="text" :class="[turnon1?class1:'']" @focus="touch1" @blur="touch11">
        <span data-placeholder="Username"></span>
      </div>

      <div class="txtb">
        <input v-model="pwd" :class="[turnon2?class1:'']" type="password" @focus="touch2" @blur="touch22">
        <span data-placeholder="Password"></span>
      </div>

      <q-btn class="logbtn" value="Login" label="Login" @click="check" />

      <div class="bottom-text">
        Don't have account? <a href="#">Sign up</a>
      </div>
    </div>
    <div id="loginformB" class="login-formB">
      <div class="avatarimg fixed-top-center">
        <q-avatar class="q-mb-sm" size="110px">
          <img src="statics/modified.png">
        </q-avatar>
        <div float class="ctn" @click="overturn">
          <span style="text-decoration:underline; cursor:pointer;">返回登陆</span>
        </div>
      </div>  
      <div class="txtb">
        <input v-model="musr" type="text" :class="[turnon3?class2:'']" @focus="touch3" @blur="touch33">
        <span data-placeholder="Username"></span>
      </div>

      <div class="txtb">
        <input v-model="old_pwd" :class="[turnon4?class2:'']" type="password" @focus="touch4" @blur="touch44">
        <span data-placeholder="Old Password"></span>
      </div>

      <div class="txtb">
        <input v-model="new_pwd" :class="[turnon5?class2:'']" type="password" @focus="touch5" @blur="touch55">
        <span data-placeholder="New Password"></span>
      </div>

      <q-btn class="logbtn" value="Changed" label="Changed" @click="pwd_update" />
      
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return{
      usr: '',
      pwd: '',
      musr: '',
      old_pwd: '',
      new_pwd: '',
      oturn: 0,
      turnon1: false,
      turnon2: false,
      class1: "focus",
      turnon3: false,
      turnon4: false,
      turnon5: false,
      class2: "focus"
    }
  },
  mounted () {
    this.$store.commit('showcase/updateDrawerState', false) 
    document.body.setAttribute("class","bg")
  },
  methods: {
    overturn () {
      if(this.oturn == 0){
        document.getElementById("loginformA").style.transform = 'translate(-50%,-50%) rotateY(180deg)'
        document.getElementById("loginformB").style.transform = 'translate(-50%,-50%) rotateY(0deg)'
        this.usr = ''
        this.pwd = ''
        this.musr = ''
        this.old_pwd = ''
        this.new_pwd = ''
        this.turnon1 = false
        this.turnon2 = false
        this.turnon3 = false
        this.turnon4 = false
        this.turnon5 = false
        this.oturn = 1
      }else{
        document.getElementById("loginformA").style.transform = 'translate(-50%,-50%)'
        document.getElementById("loginformB").style.transform = 'translate(-50%,-50%) rotateY(-180deg)'
        this.usr = ''
        this.pwd = ''
        this.musr = ''
        this.old_pwd = ''
        this.new_pwd = ''
        this.turnon1 = false
        this.turnon2 = false
        this.turnon3 = false
        this.turnon4 = false
        this.turnon5 = false
        this.oturn = 0
      }
      
    },
    touch1 () {
      if(this.usr != ''){
        console.log("11")
      }else{
        this.turnon1 = !this.turnon1
      }
    },
    touch2 () {
      if(this.pwd != ''){
        console.log("11")
      }else{
        this.turnon2 = !this.turnon2
      }
    },
    touch11 () {
      if(this.usr != ''){
        console.log("11")
      }else{
        this.turnon1 = !this.turnon1
      }
    },
    touch22 () {
      if(this.pwd != ''){
        console.log("11")
      }else{
        this.turnon2 = !this.turnon2
      }
    },
    touch3 () {
      if(this.musr != ''){
        console.log("33")
      }else{
        this.turnon3 = !this.turnon3
      }
    },
    touch4 () {
      if(this.old_pwd != ''){
        console.log("44")
      }else{
        this.turnon4 = !this.turnon4
      }
    },
    touch5 () {
      if(this.new_pwd != ''){
        console.log("55")
      }else{
        this.turnon5 = !this.turnon5
      }
    },
    touch33 () {
      if(this.musr != ''){
        console.log("33")
      }else{
        this.turnon3 = !this.turnon3
      }
    },
    touch44 () {
      if(this.old_pwd != ''){
        console.log("44")
      }else{
        this.turnon4 = !this.turnon4
      }
    },
    touch55 () {
      if(this.new_pwd != ''){
        console.log("55")
      }else{
        this.turnon5 = !this.turnon5
      }
    },
    check () {
      let user = this.usr
      
      let passwd = md5(this.pwd)
      // let passwd = this.pwd
      let sqlstr = 'select * from quasar_users where user_name=\''+user+'\' and password=\''+passwd+'\''
      // let sqlstr = 'insert into quasar_users values(\''+user+'\',\''+md5(passwd)+'\',\'1\')'
      console.log(sqlstr)
      axios.get('http://61.132.57.82:8888/alloy/dbsearch.jsp?sqlstr='+sqlstr)
          .then(response => {
            if(response.data.params.data.length == 1){
              this.$store.commit('showcase/updateDrawerState', true) 
              this.$router.push('mylayout')
            }else{
              this.usr = ''
              this.pwd = ''
              this.turnon1 = ''
              this.turnon2 = ''
              this.$q.notify({
                position: 'top',
                message: '用户名或密码错误, please try again!',
                color: 'purple',
                timeout: 2000
              })
            }
          })
          .catch(error => {
            console.log('Inside error, fetching product line items failed',error)
          })
    },
    pwd_update () {
      let muser = this.musr
      let oldpasswd = md5(this.old_pwd)
      let newpasswd = md5(this.new_pwd)
      let sqlstr = 'update quasar_users set password = \''+newpasswd+'\' where user_name = (select user_name from quasar_users where user_name=\''+muser+'\' and password=\''+oldpasswd+'\')'
      console.log(sqlstr)
      axios.get('http://61.132.57.82:8888/alloy/dboperator.jsp?sqlstr='+sqlstr)
          .then(response => {
            if(response.data == 1){
              this.$store.commit('showcase/updateDrawerState', true) 
              this.$router.push('mylayout')
            }else{
              this.musr = ''
              this.old_pwd = ''
              this.new_pwd = ''
              this.turnon3 = ''
              this.turnon4 = ''
              this.turnon5 = ''
              this.$q.notify({
                position: 'top',
                message: '密码修改错误, please try again!',
                color: 'purple',
                timeout: 2000
              })
            }
          })
          .catch(error => {
            console.log('Inside error, fetching product line items failed',error)
          })
      // this.$store.commit('showcase/updateDrawerState', true) 
      // this.$router.push('mylayout')
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: montserrat;
  box-sizing: border-box;
}

.ctn{
  position: relative;
  top: -180px;
  right: -130px;
}

.reversal{
  top: -110px;
  right: -110px;
}

.fingers{
  width: 80px;
  height: 110px;
}

.avatarimg{
  top: -10px;
  position: relative;
  vertical-align: middle;
  text-align: center;
}

.bg{
  min-height: 100vh;
  background-image: linear-gradient(120deg,#3498db,#8e44ad);
}

.login-formA{
  width: 360px;
  background: #f1f1f1;
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  backface-visibility: hidden;
  transition: 1s;
}

.login-formB{
  width: 360px;
  background: #f1f1f1;
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1s;
}

.txtb{
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 30px 0;
}

.txtb input{
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
}

.txtb span::before{
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  z-index: -1;
  transition: .5s;
}

.txtb span::after{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(120deg,#3498db,#8e44ad);
  transition: .5s;
}

.focus + span::before{
  top: -5px;
}
.focus + span::after{
  top: 40px;
  left: 0;
  width: 100%;
}

.logbtn{
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(120deg,#3498db,#8e44ad,#3498db);
  background-size: 200%;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: .5s;
}

.logbtn:hover{
  background-position: right;
}

.bottom-text{
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
}
</style>