<template>
  <ul class="inforList">
    <li>
      <a href="change_pwd.html" class="isNext">修改密码</a>
    </li>
    <li>
      <a href="address.html" class="isNext">我的地址</a>
    </li>
    <li>
      <a href="article.html" class="isNext">关于我们</a>
    </li>
    <li>
      <router-link to="login" class="lastBtn" @click.native="logout">安全退出</router-link>
    </li>
  </ul>
</template>

<script>
import * as types from '../store/types';

export default {
  methods: {
    logout(){
      this.$store.dispatch({
        type:types.CHECK_AUTH,
        auth:false
      })
    }
  },  
}
</script>