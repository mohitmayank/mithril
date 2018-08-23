import React from 'react';
import { reach } from 'yup';
import InputField from './InputField';
import PasswordField from './PasswordField';
import { inject, observer } from 'mobx-react';

@inject('schema', 'values', 'errors')
@observer
class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.formSchema = props.schema;
    this.values = props.values;
    this.errors = props.errors;
    this.schema = reach(this.formSchema, this.props.name);
    this.description = this.schema.describe();
    this.label = this.props.label || this.description.label;
    this.required = this.props.require || this.description.tests.includes('required');
    this.values[this.props.name] = this.schema.default();
  }

  onChange = (e) => {
    this.values[this.props.name] = e.target.value;
  };

  onBlur = () => {
    this.schema.validate(this.values[this.props.name]).then(() => {
      this.errors[this.props.name] = null;
    }).catch((err) => {
      console.log(err);
      this.errors[this.props.name] = err.message;
    });;
  };

  render(){
    const { name, type } = this.props;
    let InputComponent = InputField;
    if(type === 'password') {
      InputComponent = PasswordField;
    }
    return (
      <InputComponent
        name={name}
        type={type}
        value={this.values[name]}
        error={this.errors[name]}
        label={this.label}
        onChange={this.onChange}
        onBlur={this.onBlur}
        required={this.required}
      />
    );
  }
}

export default FormField;
