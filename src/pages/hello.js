import React from "react";
// import { number, bool } from "prop-types";
import styled from "styled-components";
import Page from "../components/layout/page";

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
      <Page title="Home">
        <Title>Hello</Title>
      </Page>
    );
  }
}

// Index.propTypes = {
//   isServer: bool,
//   lastUpdate: number,
// };

export default Index;
