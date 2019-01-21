import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from './components/home'
import userPart from './components/userPart'
import type from './components/type'
import car from './components/car'
import set from './components/set'
import login from './components/login'
import reg from './components/reg'
import detail from './components/detail'
export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/user',component:userPart},
    {path:'/type',component:type},
    {path:'/car',component:car},
    {path:'/set',component:set},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/detail',component:detail},
    {path:'/',redirect:'/home'}
  ]
})
