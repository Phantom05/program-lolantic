

import React from 'react';
import { PlainAuthTemplate } from 'components/base/template';
import {LoginForm} from 'components/common/form';

function Login(props) {
  return (
    <PlainAuthTemplate >
      <LoginForm />
    </PlainAuthTemplate>
  );
}

export default Login;