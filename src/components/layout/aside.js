import React from 'react';
import { bool, func } from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styled from 'styled-components';

const AsideContainer = styled.div`
  padding : ${(props) => props.theme.spacing.padding};
  margin-left : -1px;
  @media (max-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
    width : ${(props) => props.theme.sizes.aside.width};
    /*margin-top : ${(props) => props.theme.sizes.header.height}*/
  }
`;

const PersisentDrawer = styled(Drawer)`
  >div {
    position : absolute;
    display : block;
    height : 100%;
    right : 0;
    left : 0;
  }
`;

function drawer() {
  return <AsideContainer>
    Hello
    <br/>
    <br/>
    <br/>
    <div style={{ height: '800px', display: 'none' }}></div>
    <br/>
    <br/>
    asdasd
    asdsad
  </AsideContainer>;
}

class Aside extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    console.log('asdas');
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    return <>
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={this.props.mobileAsideOpen}
          onClose={this.props.handleMobileAsideClose}
          onOpen={this.props.handleMobileAsideOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer()}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <PersisentDrawer
          variant="permanent"
          open={this.props.desktopAsideOpen}
        >
          {drawer()}
        </PersisentDrawer>
      </Hidden>
    </>;
  }
}

Aside.propTypes = {
  mobileAsideOpen: bool,
  desktopAsideOpen: bool,
  handleMobileAsideClose: func,
  handleMobileAsideOpen: func,
};
export default Aside;
