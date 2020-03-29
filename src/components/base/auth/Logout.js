import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {storage,keys} from 'lib/library';
import {withRouter,Redirect} from 'react-router-dom';
import {AUTH_LOGOUT_SAGAS} from 'store/actions';
// import {Actions} from 'store/actionCreators'

function Logout(props) {
  const {pending, success,failure} = useSelector(state=>state.auth.logout)
  console.log('로그아웃');

  console.log(storage.get('token'));
  

  useEffect(()=>{
    AUTH_LOGOUT_SAGAS()
  },[]);

  if(pending){

  }
  if(success){
    storage.remove('email');
    storage.remove('password');
    storage.remove('token');
    return <Redirect to="/"/>
  }
  if(failure){

  }


  if(!storage.get('token')){
    return <Redirect to="/"/>
  }
  return null;
}

export default withRouter(Logout);