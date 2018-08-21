import React from 'react';
import styled from 'styled-components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Input from './Input';
import { FieldIconButton } from './Button';
import theme from '../../lib/theme';

const InputWrapper = styled.div`
  && {
    >span>span>input {
      border-right : 0;
    }
    >span>span>span {
      background : ${theme.colors.bg.input};
    }
  }
`;

class PasswordInput extends React.Component {
  state = {
    visible: false,
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ visible: !state.visible }));
  };

  render() {
    return (
      <InputWrapper>
        <Input
          type={this.state.visible ? 'text' : 'password'}
          addonAfter={
            <FieldIconButton
              aria-label='Toggle password visibility'
              onClick={this.handleClickShowPassword}
              size='small'
              shape={null}
            >
              {this.state.visible ? <MdVisibilityOff /> : <MdVisibility />}
            </FieldIconButton>
          }
          {...this.props}
        />
      </InputWrapper>
    );
  }
}

export default PasswordInput;
