import { VIEW_NAV,VIEW_LOADING,CHECK_USER, CHECK_AUTH} from './types'

let mutations={ 

  [VIEW_NAV]:(state,payload)=> state.bNav=payload,
  [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
  [CHECK_USER]:(state,payload)=> {
    state.user.auth = payload.auth;
  },
  [CHECK_AUTH]:(state,payload)=>{
    state.user.auth = payload.auth;
  }
};
export default mutations;
