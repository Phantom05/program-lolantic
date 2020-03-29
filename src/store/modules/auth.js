import { handleActions } from 'redux-actions';
import * as actions from 'store/actions';
import produce from 'immer';
import _ from 'lodash';
import {IPSFset} from 'lib/utils';


export const initialState = {
  signIn:{
    isAutheticated:false,
    token:"",
    profile:{},
    pending: null,
    success: null,
    failure: null,
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
  // NOTE: SIGNIN 
  [actions.AUTH_SIGNIN.PENDING]: (state, { payload: diff }) => {
    return produce(state, draft => {
      IPSFset(draft.signIn,'pending');
    })
  },
  [actions.AUTH_SIGNIN.SUCCESS]: (state, { payload: diff }) => {
    return produce(state, draft => {
      IPSFset(draft.signIn,'success');
      draft.signIn.isAutheticated = true;
      draft.signIn.profile = diff;
    })
  },
  [actions.AUTH_SIGNIN.FAILURE]: (state, { payload: diff }) => {
    return produce(state, draft => {
      IPSFset(draft.signIn,'failure');
      draft.signIn.isAutheticated = false;
    })
  },

    // NOTE: TOKEN 
    [actions.AUTH_TOKEN.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.signIn,'pending');
      })
    },
    [actions.AUTH_TOKEN.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.signIn,'success');
        draft.signIn.isAutheticated = true;
        draft.signIn.profile = diff;
      })
    },
    [actions.AUTH_TOKEN.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.signIn,'failure');
        draft.signIn.isAutheticated = false;
      })
    },

     // NOTE: LOGOUT 
     [actions.AUTH_LOGOUT.PENDING]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.logout,'pending');
      })
    },
    [actions.AUTH_LOGOUT.SUCCESS]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.logout,'success');
        draft.signIn = initialState.signIn;
        
      })
    },
    [actions.AUTH_LOGOUT.FAILURE]: (state, { payload: diff }) => {
      return produce(state, draft => {
        IPSFset(draft.logout,'failure');
        draft.signIn.isAutheticated = false;
      })
    },
    

}, initialState);




