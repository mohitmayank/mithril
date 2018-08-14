import React from 'react';
import { object } from 'prop-types';
import { observer, inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { H1 } from '../components/blocks/Heading';
import CardPage from '../components/layout/cardpage';
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
      <H1 title='Hello there!' />
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
