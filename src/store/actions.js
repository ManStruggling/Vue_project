

import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
  [types.CHECK_USER]:({commit,state},payload)=>{
    return axios({
      url:'/data/user.json'
    }).then(
      res=>{
        if(payload.username===res.data.data.username&&payload.password===res.data.data.password){
          //登录成功
          commit({type:types.CHECK_USER,auth:true});
        }else{
          //登录失败
          commit({type:types.CHECK_USER,auth:false});
        }
      }
    )
  },
  [types.CHECK_AUTH]:({commit,state},payload)=>{
    commit(types.CHECK_AUTH,payload)},
};
export default actions;