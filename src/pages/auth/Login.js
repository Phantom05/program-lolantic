

import React from 'react';
import { PlainAuthTemplate } from 'components/base/template';
import { LoginContainer } from 'containers/auth';
// import {LoginForm} from 'components/common/form';

function Login(props) {
  return (
    <PlainAuthTemplate >
      <LoginContainer />
    </PlainAuthTemplate>
  );
}

export default Login;