import React from 'react';
import { string, func, object } from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import getConfig from 'next/config';
import theme from '../../lib/theme';

const { publicRuntimeConfig } = getConfig();

const BarWrapper = styled.div`
  flex-grow: 1;
  padding-bottom : 64px;
`;

const TopBar = styled.div`
  && {
    background-color : ${theme.colors.primary}
    box-shadow : none;
  }
`;

const Toolbar = styled.div`
  height : ${(props) => props.theme.sizes.header.height};
  padding-left: 16px;
  padding-right : 16px;
  display: flex;
  position: relative;
  align-items: center;
`;

const FlexDiv = styled.div`
  flex-grow : 1;
`;

const MenuButton = styled(IconButton)`
  && {
    margin-left : -12px;
    margin-right : 20px;
  }
`;

const LogoImage = styled.img`
`;

@inject('store') @observer
class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleHamburgerMenu = () => {
    if (isWidthUp(theme.misc.menuBreakPoint, this.props.width)) {
      this.props.handleDesktopAsideToggle();
    } else {
      this.props.handleMobileAsideOpen();
    }
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.store.logout();
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <BarWrapper>
        <TopBar position='fixed' component='div'>
          <Toolbar variant='dense'>
            <MenuButton
              color='inherit'
              aria-label='Menu'
              onClick={this.handleHamburgerMenu}
            >
              <MenuIcon />
            </MenuButton>
            <FlexDiv>
              <LogoImage
                src={`${publicRuntimeConfig.staticDomain}/public/images/logo.png`}
                alt='Valinor'
                width='158'
                height='35'
              />
            </FlexDiv>
            {this.props.store.auth ? (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup='true'
                  onClick={this.handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {/* <MenuItem onClick={this.handleClose}>Profile</MenuItem> */}
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <></>
            )}
          </Toolbar>
        </TopBar>
      </BarWrapper>
    );
  }
}

Header.propTypes = {
  width: string,
  handleMobileAsideOpen: func,
  handleDesktopAsideToggle: func,
  store: object,
};

export default withWidth()(Header);
// export default Header;
