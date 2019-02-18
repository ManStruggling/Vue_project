<template>
  <div>
    <loading v-show="bLoading"></loading>
    <transition
    enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <navBar v-show="bNav"></navBar>
  </div>
</template>

<script>
import navBar from "./components/navBar";

import {mapGetters} from 'vuex';
import * as types from './store/types'

export default {
  components: {
    navBar,
  },
  computed:mapGetters([
    'bNav','bLoading'
  ]),
  watch:{
    $route:{//路由监听
      handler:function(to){
        let path = to.path;
        if(/set|detail|car|login|reg/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
        }else{
          this.$store.dispatch(types.VIEW_NAV,true);
        }
      },
      immediate:true
    }
  }
};
</script>

<style>
</style>
