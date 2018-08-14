import React from 'react';
import Typography from '@material-ui/core/Typography';
import { string } from 'prop-types';

const H1 = (props) => (
  <Typography variant='title' gutterBottom component='h1'>
    { props.title }
  </Typography>
);

H1.propTypes = {
  title: string,
};

const H2 = (props) => (
  <Typography variant='headline' gutterBottom component='h2'>
    { props.title }
  </Typography>
);

H2.propTypes = {
  title: string,
};

const H3 = (props) => (
  <Typography variant='subheading' gutterBottom component='h2'>
    { props.title }
  </Typography>
);

H3.propTypes = {
  title: string,
};

export {
  H1,
  H2,
  H3,
};

export default H1;
