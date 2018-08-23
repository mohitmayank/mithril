import React from 'react';
import styled from 'styled-components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Form, Input } from 'antd';
import Nbsp from 'react-nbsp';
import { observer } from 'mobx-react';
import { FieldIconButton } from './Button';

const InputWrapper = styled.div`
  && {
    >span>span>input {
      border-right : 0;
    }
    >span>span>span {
      background : ${(props) => props.theme.colors.bg.input};
    }
  }
`;

@observer class PasswordField extends React.Component {
  state = {
    visible: false,
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ visible: !state.visible }));
  };

  render() {
    return (
      <Form.Item
        label={this.props.label}
        required={this.props.required}
        validateStatus={!!this.props.error ? 'error' : undefined}
        help={this.props.error || <Nbsp/>}
      >
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
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            required={this.props.required}
            size='large'
        />
        </InputWrapper>
      </Form.Item>
    );
  }
}

export default PasswordField;
