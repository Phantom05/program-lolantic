import React from 'react';
import {DashboardTemplate} from 'components/base/template';
import {DashboardNavContainer} from 'containers/nav';
import {PlainHeaderContainer} from 'containers/header';


function Home(props) {
  return (
    <DashboardTemplate
      header={<PlainHeaderContainer />}
      nav={<DashboardNavContainer />}
      title="Dashboard"
    >
      Dashboard
    </DashboardTemplate>
  );
}

export default Home;