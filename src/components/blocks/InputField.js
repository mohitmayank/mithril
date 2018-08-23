import React from 'react';
import { string, func, bool, number, oneOfType } from 'prop-types';
import Nbsp from 'react-nbsp';
import { Form, Input } from 'antd';

function InputField(props) {
  return (
    <Form.Item
      label={props.label}
      required={props.required}
      validateStatus={!!props.error ? 'error' : undefined}
      help={props.error || <Nbsp/>}
    >
    <Input
      type={'text'}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      required={props.required}
      size='large'
    />
    </Form.Item>
  );
}

InputField.propTypes = {
  label : string,
  required : bool,
  error : string,
  type : string,
  name : string,
  value : oneOfType([string, number]),
  onChange : func,
  onBlur : func,
};

export default InputField;
