

import React from 'react';
import { PlainAuthTemplate } from 'components/base/template';
import {ResetPasswordForm} from 'components/common/form';

function ResetPassword(props) {
  return (
    <PlainAuthTemplate >
      <ResetPasswordForm />
    </PlainAuthTemplate>
  );
}

export default ResetPassword;