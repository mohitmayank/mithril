import React from 'react';
import {
  oneOfType, arrayOf, node, string, object, bool,
} from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import './styles';
import Head from './head';
import Header from './header';
import Footer from './footer';
import Aside from './aside';
import LoginForm from './login';

const DocumentWrapper = styled.div`
  position : fixed;
  left : 0;
  right : 0;
  top : ${(props) => props.theme.sizes.header.height};
  bottom : 0;
  overflow: hidden;
  margin: 0px;
  display: flex;
  flex-direction : row-reverse;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;
  width : 100%;
  transition: all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  transition: all 1s ease-in-out;
  background-color : ${(props) => props.theme.colors.bg.body}
`;

const Main = styled.main`
  flex-grow : 1;
  @media (${(props) => props.theme.screen.gte[props.theme.breakpoints.aside]}) {
    padding-left : ${(props) => props.theme.spacing.padding};
    padding-right : ${(props) => props.theme.spacing.padding};
  }
`;

const PageWrapper = styled.div`
  max-width : ${(props) => props.theme.sizes.main.width};
  margin-left : auto;
  margin-right : auto;
  @media (${(props) => props.theme.screen.gte[props.theme.breakpoints.aside]}) {
    margin-top :  ${(props) => props.theme.spacing.padding};
  }
`;

@inject('store') @observer
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.asideRef = React.createRef();
  }

  handleHamburgerMenu = () => {
    this.asideRef.current.toggle();
  }

  render() {
    return (
      <>
        <Head title={this.props.title} />
        <Header
          handleHamburgerMenu={this.handleHamburgerMenu}
          hideMenuButton={this.props.withoutAside || !this.store.auth}
        />
        <DocumentWrapper>
          <MainWrapper>
            <Main>
              <PageWrapper>
                {!this.props.withoutLogin && !this.store.auth ? (
                  <LoginForm title={this.props.loginCopy || 'Signin'} />
                ) : this.props.children}
              </PageWrapper>
            </Main>
            <Footer/>
          </MainWrapper>
          <Aside innerRef={this.asideRef} forceHide={this.props.withoutAside || !this.store.auth} />
        </DocumentWrapper>
      </>
    );
  }
}

Page.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  title: string,
  store: object,
  withoutAside: bool,
  withoutLogin: bool,
  loginCopy: string,
};

export default Page;
