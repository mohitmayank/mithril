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
};

export {
  Button,
  PrimaryButton,
  SecondaryButton,
};

export default Button;
