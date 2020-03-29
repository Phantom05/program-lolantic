import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import _ from 'lodash';


export const initialState = {
  signIn:{
    isAutheticated:false,
    token:"",
    profile:{}
  },
  autoLogin: {
    pending: null,
    success: null,
    failure: null,
  },
  logout:{
    pending:null,
    success:null,
    failure:null,
  },
  
}


export default handleActions({
  // NOTE: AUTH_INIT
  // [actions.AUTH_INIT]: (state, { payload: diff }) => {
  //   return produce(state, draft => {
  //     const key = diff;
  //     draft[key] = initialState[key]
  //   })
  // },

}, initialState);




