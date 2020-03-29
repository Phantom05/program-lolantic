import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import {mapper} from 'lib/mapper';
import {PrivateRoute} from 'components/base/route';

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
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/reset/password" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
