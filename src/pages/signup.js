import React from 'react';
// import { number, bool } from "prop-types";
import styled from 'styled-components';
import CardPage from '../components/layout/cardpage';

const Title = styled.h1`
  font-size: 50px;
`;

class Index extends React.Component {
  static getInitialProps() {
    return {
    };
  }

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <CardPage title="Create Account">
        <Title>Hello</Title>
        <h2>Hello2</h2>
      </CardPage>
    );
  }
}

// Index.propTypes = {
//   isServer: bool,
//   lastUpdate: number,
// };

export default Index;
