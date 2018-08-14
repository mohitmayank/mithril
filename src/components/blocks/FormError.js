import React from 'react';
import { string } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Nbsp from 'react-nbsp';

function FormError(props) {
  return (
    <Typography color='error' gutterBottom>
      {props.error ? `Error : ${props.error}` : <Nbsp/>}
    </Typography>
  );
}

FormError.propTypes = {
  error: string,
};

export default FormError;
