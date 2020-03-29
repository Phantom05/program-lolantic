import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {DashboardNavContainer} from 'containers/nav';
import {PlainHeaderContainer} from 'containers/header';

function Analysis(props) {
  return (
    <DashboardTemplate
      header={<PlainHeaderContainer />}
      nav={<DashboardNavContainer />}
      title="Analysis"
    >
      <div>
        <input type="text"/> 
      </div>
    </DashboardTemplate>
  );
}

export default Analysis;