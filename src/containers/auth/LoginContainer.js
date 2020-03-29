import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { LoginForm } from 'components/common/form';
import {AUTH_SIGNIN_SAGAS} from 'store/actions';
import{mapper} from 'lib/mapper';

function LoginContainer(props) {
  const { isAutheticated } = useSelector(({auth}) => ({
    isAutheticated:auth.signIn.isAutheticated
  }));
  return (
    <LoginForm 
      onSubmit={AUTH_SIGNIN_SAGAS}
    />
  );
}

export default LoginContainer;