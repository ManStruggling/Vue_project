import axios from 'axios';
import store from '../store'
import * as types from '../store/types';

axios.interceptors.request.use(function (config) {
    // config 请求是发出的配置  修改配置
    // console.log('显示loading')
    // store==组件里面的this.$store
    //抓到 vm.$root.bLoading=true
    store.dispatch(types.VIEW_LOADING,true)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // response ==  响应数据
    //隐藏loading
    store.dispatch(types.VIEW_LOADING,false)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });



export default {
    install(Vue){
        Vue.prototype.$http = axios;
        window.axios = axios;
    }
}