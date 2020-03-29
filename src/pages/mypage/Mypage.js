import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {DashboardNavContainer} from 'containers/nav';
import {PlainHeaderContainer} from 'containers/header';

function Mypage(props) {
  return (
    <DashboardTemplate
      header={<PlainHeaderContainer />}
      nav={<DashboardNavContainer />}
      title="Mypage"
    >
      Mypage
    </DashboardTemplate>
  );
}


export default Mypage;