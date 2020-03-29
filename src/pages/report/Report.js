import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {DashboardNavContainer} from 'containers/nav';
import {PlainHeaderContainer} from 'containers/header';

function Report(props) {
  return (
    <DashboardTemplate
      header={<PlainHeaderContainer />}
      nav={<DashboardNavContainer />}
      title="Report"
    >
      Report
    </DashboardTemplate>
  );
}

export default Report;