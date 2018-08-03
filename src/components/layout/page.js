import React from "react";
import {
  oneOfType, arrayOf, node, string, object,
} from "prop-types";
import styled from "styled-components";
import { autorun } from "mobx";
import { inject, observer } from "mobx-react";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import Aside from "./aside";
import theme from "../../lib/theme";

const PageWrapper = styled.div`
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

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

const AsideFlex = styled(Column)`
  flex-shrink: 0;
  width: ${(props) => props.theme.sizes.aside.width};
  position : relative;
  margin-left : 0;
  transition: margin 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  @media (max-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
    display : none;
  }
`;

const ContentWrapper = styled(Column)`
  width : 100%;
  transition: all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  transition: all 1s ease-in-out;
  background-color : ${(props) => props.theme.colors.bg.body}
`;

const StyledMain = styled.main`
  flex-grow : 1;
  @media (min-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
    padding-left : ${(props) => props.theme.spacing.padding};
    padding-right : ${(props) => props.theme.spacing.padding};
  }
`;

const PageContentContainer = styled.div`
  max-width : ${(props) => props.theme.sizes.main.width};
  margin-left : auto;
  margin-right : auto;
  @media (min-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
    margin-top :  ${(props) => props.theme.spacing.padding};
  }
`;

const sideBarCloseMargin = `-${theme.sizes.aside.width}`;
const sideBarId = "asideNavDrawer";

@inject("store") @observer
class Page extends React.Component {
  state = {
    mobileAsideOpen: false,
  };

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.disposeAsideListner = autorun(() => {
      if (this.store.desktopAsideOpen) {
        document.getElementById(sideBarId).style.marginLeft = "0";
      } else {
        document.getElementById(sideBarId).style.marginLeft = sideBarCloseMargin;
      }
    });
  }

  componentWillUnmount() {
    this.disposeAsideListner();
  }

  handleDesktopAsideOpen = () => {
    this.store.desktopAsideOpen = true;
  };

  handleDesktopAsideClose = () => {
    this.store.desktopAsideOpen = false;
  };

  handleDesktopAsideToggle = () => {
    this.store.desktopAsideOpen = !this.store.desktopAsideOpen;
  };

  handleMobileAsideOpen = () => {
    this.setState({ mobileAsideOpen: true });
  };

  handleMobileAsideClose = () => {
    this.setState({ mobileAsideOpen: false });
  };

  handleMobileAsideToggle = () => {
    this.setState({ mobileAsideOpen: !this.state.mobileAsideOpen });
  };

  handleHamburgerMenu = () => {
    this.handleMobileAsideOpen();
    this.handleDesktopAsideToggle();
  }

  render() {
    return (
      <>
        <Head title={this.props.title} />
        <Header
          handleMobileAsideOpen={this.handleMobileAsideOpen}
          handleDesktopAsideToggle={this.handleDesktopAsideToggle}
        />
        <PageWrapper>
          <ContentWrapper>
            <StyledMain>
              <PageContentContainer>
                {this.props.children}
              </PageContentContainer>
            </StyledMain>
            <Footer/>
          </ContentWrapper>
          <AsideFlex id={sideBarId}>
            <Aside
              desktopAsideOpen={this.state.desktopAsideOpen}
              mobileAsideOpen={this.state.mobileAsideOpen}
              handleMobileAsideClose={this.handleMobileAsideClose}
              handleMobileAsideOpen={this.handleMobileAsideOpen}
            />
          </AsideFlex>
        </PageWrapper>
      </>
    );
  }
}

Page.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  title: string,
  store: object,
};

export default Page;
