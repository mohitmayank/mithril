import styled from 'styled-components';
import { Button as AntButton } from 'antd';


const Button = styled(AntButton)`
  && {
    /* doesnt do anything just left as an example of styled-components */
    display : inherit;
  }
`;

const PrimaryButton = styled(Button)``;

PrimaryButton.defaultProps = {
  type: 'primary',
  size: 'large',
};

const SecondaryButton = styled(Button)``;

SecondaryButton.defaultProps = {
  type: 'secondary',
  size: 'large',
};

const BlankButton = styled(Button)`
  && {
    border : none;
    color : black;
    background : none;
    vertical-align: middle;
    >svg {
      width : 100%;
    }
  }
`;

const CircleButton = styled(BlankButton)`
  && {
    height : 48px;
    width : 48px;
    &:hover {
      background : rgba(0, 0, 0, 0.08);
    }
    &:disabled {
      color : gray;
        &:hover {
          background : inherit;
        }
    }
  }
`;

CircleButton.defaultProps = {
  size: 'large',
  shape: 'circle',
};

const FieldIconButton = styled(BlankButton)`
  && {
    padding : 0;
    height : 20px;
    width : 20px;
    > svg {
      height : 100%;
    }
  }
`;

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  FieldIconButton,
  CircleButton,
};

export default Button;
