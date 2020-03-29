
import React from 'react';
import { PureLoginForm } from 'components/common/form';
import styled from 'styled-components';
import {
  positionCenterCenter,
  positionWidthCenter,
  color,
  font
} from 'styles/_utils';


const LoginForm = styled(PureLoginForm)`
&{
  .signin__info_box{
    display:inline-block;
    width:100%;
    padding:9px;
    text-align:right;
  }
  .signin__info_tx{
    cursor: pointer;
    ${font(15,color.link_blue)}
    &:hover{
      /* text-decoration:underline; */
    }
  }
}
`
export default LoginForm;