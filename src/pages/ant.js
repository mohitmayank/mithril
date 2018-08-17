import React from 'react';
import { object } from 'prop-types';
import { observer, inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import Page from '../components/layout/layout';
import { Button } from '../components/blocks/Button';

@inject('store') @observer
class Index extends React.Component {
  static getInitialProps() {
    return {
    };
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  handleLogout = () => {
    this.props.store.logout();
  };

  renderPage = () => (
    <>
      <h1>Hello there!</h1>
      <br/>
      <Typography gutterBottom>
          You are Logged in as {this.store.auth.name}
        <br/>
        <br/>
      </Typography>
      <Button onClick={this.handleLogout}>Logout</Button>
    </>
  );

  render() {
    return (
      <Page title='Hello there' >
        <h1>Hello</h1>
        {this.store.auth && this.renderPage()}
      </Page>
    );
  }
}

Index.propTypes = {
  store: object,
};

export default Index;
