import React from 'react';
import { object, string } from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import * as yup from 'yup'; // for everything
import { Row, Col } from 'antd';
import Form from '../blocks/Form';
import { PrimaryButton } from '../blocks/Button';
import Input from '../blocks/Input';
import FormField from '../blocks/FormField';
import FormError from '../blocks/FormError';
import PagePaper from '../blocks/PagePaper';


const FormItem = Form.Item;

@inject('store') @observer class LoginForm extends React.Component {
  state = {
    error : '',
  };

  schema = yup.object().shape({
    email : yup.string().label('Email').email().required(),
    password : yup.string().label('Password').required(),
  });

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onSubmit = (values) => {
    // this.store.api.post('/auth').then((res) => {
    //   this.store.registerAuth(res.data.token, res.data, true);
    // }).catch((error) => this.setState({ error }));
    this.store.registerAuth('randomtoken', {
      name: 'Browser User',
    }, true);
  };

  render() {
    return (
      <PagePaper>
        <h1>{this.props.title} </h1>
        <Row>
          <Col xs={24} sm={12}>
            <Form onSubmit={this.onSubmit} layout='vertical' schema={this.schema}>
              <FormField
                type='email'
                name='email'
              />
              <FormField
                type='password'
                name='password'
              />
              <FormError error={this.state.error} />
              <PrimaryButton htmlType='submit' >Login</PrimaryButton>
            </Form>
          </Col>
          <Col xs={24} sm={12}>
          </Col>
        </Row>
      </PagePaper>
    );
  }
}

LoginForm.propTypes = {
  store: object,
  title: string,
};

export default LoginForm;
