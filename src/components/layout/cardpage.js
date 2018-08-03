import React from "react";
import { string } from "prop-types";
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
import Page from "./page";

const PagePaper = styled(Paper)`
  && {
    border-radius : none;
    box-shadow : none;
    padding : ${(props) => props.theme.spacing.padding}
    @media (min-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
      border-radius: 6px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    }
  }
`;

class CardPage extends React.Component {
  render(){
    return (
      <Page title={this.props.title}>
        <PagePaper elevation={1}>
          {this.props.children}
        </PagePaper>
      </Page>
    );
  };
}

CardPage.propTypes = {
  title : string.isRequired
};

export default CardPage;
