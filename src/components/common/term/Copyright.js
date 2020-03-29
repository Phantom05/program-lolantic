import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {mapper} from 'lib/mapper';

function Copyright() {
  const baseMapper = mapper.base;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={baseMapper.website} target="_blank">
        {baseMapper.brandName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;

