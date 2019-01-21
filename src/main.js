import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import './assets/css/style.css'

import axios from './plugins/axios';
Vue.use(axios);

import loading from './components/loading'
Vue.use(loading);//安装公共loading插件

//引入动画库
import 'animate.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
