import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ENV_MODE_PROD } from 'lib/setting'
import { connect } from 'react-redux';
import { Actions } from 'store/actionCreators';
import {FullScreenLoading} from 'components/base/loading';
import throttle from 'lodash/throttle';
import {useSelector, shallowEqual} from 'react-redux';
import {mapper} from 'lib/mapper';
import {
  AUTH_TOKEN_SAGAS, 
  // AUTO_LOGIN_SAGAS
} from 'store/actions';
import { disableF5,
  storage, keys , compareProp
} from 'lib/library'

const Core = React.memo(function Core(props){
  const {landing} = useSelector(({base})=>({landing:base.landing}));
  // console.log('core');
  // console.log(landing);
  
  const initialize = async () => {
    const token = mapper.auth.storageToken;

    if(ENV_MODE_PROD){
      document.addEventListener("keydown", disableF5);
    }

    if (!token) {
      return Actions.base_exit_landing();
    }
    AUTH_TOKEN_SAGAS();
  }

  const setWidth = () => {
    if (typeof window === 'undefined') return;
  };

  const onResize = throttle(() => {
    setWidth();
  }, 250);

  useEffect(()=>{
    initialize();
    return ()=>{
      document.removeEventListener("keydown", disableF5);
    }
  },[]);
  // useEffect(()=>{
  //   window.addEventListener('resize', onResize);
  //   return ()=>{
  //     window.removeEventListener('resize', onResize);
  //   }
  // },[onResize]);


  return(
    <>
      <FullScreenLoading visible={landing}/>
    </>
  )
})



export default withRouter(Core);



