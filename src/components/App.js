import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Core from 'containers/base/Core';
import { Helmet } from 'react-helmet'
import {mapper} from 'lib/mapper';
import {PrivateRoute, LRoute} from 'components/base/route';
import {Logout} from 'components/base/auth';

import {
  Auth,
  Login,
  ResetPassword,
  Home,
  NotFound,
  // Auth,
} from 'pages';


function App() {
  const { base } = useSelector(state => state);
  return (
    <div className="App">
      <Helmet>
        <title>{mapper.base.brandName}</title>
      </Helmet>
      
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <LRoute exact path="/auth/login" component={Login} token />
        <LRoute exact path="/auth/reset/password" component={ResetPassword} token/>
        <Route exact path="/auth/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
      <Core />
    </div>
  );
}

export default App;
