import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useSelector, shallowEqual } from 'react-redux';
import {FullScreenLoading} from 'components/base/loading';

// <PrivateRoute path="/project" component={Project} to="/auth/signup"/>
function PrivateRoute({component:Component,...rest}) {
  const {isAutheticated,landing} = useSelector(({auth,base})=>
  ({
    isAutheticated:auth.signIn.isAutheticated,
    landing:base.landing
  }),
  shallowEqual );
  // const {signIn} = auth;
  // const {landing} = base;
  const isRedirect = rest.redirect;
  return (
    <Route {...rest} render={props=>{
      if(landing){
        return <FullScreenLoading visible={true}/>
      }else if(!isAutheticated){
        return <Redirect to={rest.to? rest.to : '/auth/login'}/>
      }else if(rest.redirect){
        return <Redirect to={isRedirect}/>
      }else{
        return <Component {...props}/>
      }
    }} />
  );
}

export default PrivateRoute;