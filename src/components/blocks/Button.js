import React from "react";
import MUIButton from '@material-ui/core/Button';
import styled from "styled-components";

const Button = styled(MUIButton)`
  && {
    padding : 8px 20px;
  }
`;

Button.defaultProps = {
  variant : "contained"
};

const PrimaryButton = styled(Button)``;

PrimaryButton.defaultProps = {
  color : "primary"
};

const SecondaryButton = styled(Button)``;

SecondaryButton.defaultProps = {
  color : "secondary"
};

export {
  Button,
  PrimaryButton,
  SecondaryButton,
};

export default Button;
