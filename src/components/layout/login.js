import React from 'react';
import { object, string } from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Row, Col, Form } from 'antd';
import { PrimaryButton } from '../blocks/Button';
import Input from '../blocks/Input';
import PasswordInput from '../blocks/PasswordInput';
import FormError from '../blocks/FormError';
import PagePaper from '../blocks/PagePaper';

class Auth {
  @observable email = '';

  @observable password = '';
}

const FormItem = Form.Item;

@inject('store') @observer class LoginForm extends React.Component {
  state = {
    error: '',
  };

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.auth = new Auth();
  }

  handleChange = (e) => {
    this.auth[e.target.name] = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
            <Form onSubmit={this.handleSubmit} layout='vertical'>
              <FormItem label='Email'>
                <Input
                  type='email'
                  name='email'
                  value={this.auth.email}
                  onChange={this.handleChange}
                  size='large'
                  required
                />
              </FormItem>
              <FormItem label='Password'>
                <PasswordInput
                  name='password'
                  value={this.auth.password}
                  onChange={this.handleChange}
                  size='large'
                  required
                />
              </FormItem>
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
