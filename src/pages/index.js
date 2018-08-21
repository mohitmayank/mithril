import React from 'react';
import { object } from 'prop-types';
import { observer, inject } from 'mobx-react';
import CardPage from '../components/layout/cardpage';
import { SecondaryButton } from '../components/blocks/Button';

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
      <p>
          You are Logged in as {this.store.auth.name}
        <br/>
        <br/>
      </p>
      <SecondaryButton onClick={this.handleLogout}>Logout</SecondaryButton>
    </>
  );

  render() {
    return (
      <CardPage title='Hello there' >
        {this.store.auth && this.renderPage()}
      </CardPage>
    );
  }
}

Index.propTypes = {
  store: object,
};

export default Index;
