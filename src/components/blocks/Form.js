import React from 'react';
import { Form as AntForm } from 'antd';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';

class Form extends React.Component {
  @observable errors = {};
  @observable values = {};

  constructor(props) {
    super(props);
    this.values = props.values || this.values;
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.schema.validate(this.values, { abortEarly : false })
      .then((values) => this.props.onSubmit && this.props.onSubmit(values))
      .catch((err) => {
        console.log(err);
        err.inner.forEach((e) => {
          this.errors[e.path] = e.message;
        });
      });
  };

  render(){
    return (
      <Provider
        schema={this.props.schema}
        errors={this.errors}
        values={this.values}
      >
        <AntForm layout={this.props.layout} onSubmit={this.onSubmit}>
          {this.props.children}
        </AntForm>
      </Provider>
    );
  }
}

export default Form;
