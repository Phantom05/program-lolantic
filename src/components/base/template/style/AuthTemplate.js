
import React from 'react';
import { PureAuthTemplate } from 'components/base/template';
import styled from 'styled-components';
import { 
  positionCenterCenter, 
  positionWidthCenter 
} from 'styles/_utils';



const PlainAuthTemplate =  styled(PureAuthTemplate)`
&{
  .auth__section{
    ${positionCenterCenter};
      &.static{
      position:absolute;
      width:100%;
      height:100%;;
    }
  }
  .auth__header{
    ${positionWidthCenter};
    width:100%;
    top:0;
  }
  .auth__footer{
    ${positionWidthCenter};
    width:100%;
    bottom:32px;
  }

}
`
export default PlainAuthTemplate;