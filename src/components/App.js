import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Core from 'containers/base/Core';
import { Helmet } from 'react-helmet'
import {mapper} from 'lib/mapper';
import reset from "styled-reset";
import {PrivateRoute, LRoute} from 'components/base/route';
import {Logout} from 'components/base/auth';

import {
  Auth,
  Login,
  ResetPassword,
  Home,
  Report,
  Manage,
  Mypage,
  Analysis,
  NotFound,
  // Auth,
} from 'pages';


function App() {
  return (
    <>
      <Helmet>
        <title>{mapper.base.brandName}</title>
      </Helmet>
      {/* <Stlyed.GlobalStyles /> */}
      <Core />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute  path="/analysis" component={Analysis} />
        <PrivateRoute  path="/manage" component={Manage} />
        <PrivateRoute  path="/report" component={Report} />
        <PrivateRoute  path="/mypage" component={Mypage} />
        <LRoute  path="/auth/login" component={Login} token />
        <LRoute  path="/auth/reset/password" component={ResetPassword} token/>
        <Route  path="/auth/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
     
    </>
  );
}

export default App;


const Stlyed = {
  GlobalStyles: createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }
  *{
      box-sizing:border-box !important;
  }
  body{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
  }

  `
}
