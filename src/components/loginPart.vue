<template>
  <ul class="formarea">
    <li>
      <label class="lit">账号：</label>
      <input type="text" placeholder="手机号码" class="textbox" v-model="username">
    </li>
    <li>
      <label class="lit">密码：</label>
      <input type="password" placeholder="登陆密码" class="textbox" v-model="password">
    </li>
    <li class="liLink lg_liLink">
      <span>
        <label>
          <input type="checkbox">记住密码
        </label>
      </span>
      <span>
        <router-link to="reg">新用户注册</router-link>
      </span>
      <span>
        <a href="find_pwd.html">忘记密码?</a>
      </span>
    </li>
    <li>
      <input type="button" value="立即登陆" @click="checkLogin">
    </li>
  </ul>
</template>

<script>
import * as types from '../store/types';

export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    checkLogin(){
      this.$store.dispatch({
        type:types.CHECK_USER,
        username:this.username,
        password:this.password
      }).then(
        (auth)=>{
          //抓state仓库  this.$store.state.user.auth
          //抓 res结果
          if(this.$store.state.user.auth){
            this.$router.push('/user')
          }else{
            // this.$router.push('/reg')
            alert("账户或密码错误!")
          }
        }
      )
    }
  },

}
</script>