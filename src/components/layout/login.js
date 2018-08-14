import React from 'react';
import { object, string } from 'prop-types';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { PrimaryButton } from '../blocks/Button';
import PasswordField from '../blocks/PasswordField';
import { H1 } from '../blocks/Heading';
import FormError from '../blocks/FormError';
import PagePaper from '../blocks/PagePaper';

class Auth {
  @observable email = '';

  @observable password = '';
}

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
        <H1 title={this.props.title} />
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label='Email'
                type='email'
                name='email'
                value={this.auth.email}
                onChange={this.handleChange}
                required
                fullWidth
              />
              <PasswordField
                label='Password'
                name='password'
                value={this.auth.password}
                onChange={this.handleChange}
                required
                fullWidth
              />
              <FormError error={this.state.error} />
              <PrimaryButton type='submit'>Login</PrimaryButton>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
        </Grid>
      </PagePaper>
    );
  }
}

LoginForm.propTypes = {
  store: object,
  title: string,
};

export default LoginForm;
