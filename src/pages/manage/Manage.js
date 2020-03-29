import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {DashboardNavContainer} from 'containers/nav';
import {PlainHeaderContainer} from 'containers/header';

function Manage(props) {
  return (
    <DashboardTemplate
      header={<PlainHeaderContainer />}
      nav={<DashboardNavContainer />}
      title="Manage"
    >
      Manage
    </DashboardTemplate>
  );
}

export default Manage;