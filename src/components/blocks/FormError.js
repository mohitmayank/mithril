import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Nbsp from 'react-nbsp';

const ErrorMessage = styled.p`
  color : ${(props) => props.theme.colors.danger}
`;

function FormError(props) {
  return (
    <ErrorMessage>
      {props.error ? `Error : ${props.error}` : <Nbsp/>}
    </ErrorMessage>
  );
}

FormError.propTypes = {
  error: string,
};

export default FormError;
