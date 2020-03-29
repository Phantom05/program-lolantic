import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useSelector,shallowEqual} from 'react-redux';
import {FullScreenLoading} from 'components/base/loading';

// <LRoute path="/auth" component={Auth} token/>
// token이 있을때 보이면 안되는 페이지
function LRoute({component:Component,...rest}) {
  const {isAutheticated,landing} = useSelector(({auth,base})=>
  ({
    isAutheticated:auth.signIn.isAutheticated,
    landing:base.landing
  }),
  shallowEqual );

  return (
    <Route {...rest} render={props=>{
      const isLogOutPage = props.location.pathname !==`${props.match.path}/logout`;
      if(landing){
        return <FullScreenLoading visible={true}/>
      }else if(rest.token && isAutheticated){
        return isLogOutPage? <Redirect to="/"/> : <Component {...props}/>;
      }else {
        return <Component {...props}/>;
      }
    }} />
  );
}

export default LRoute;