import React from 'react';
import { func, object } from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { MdMenu, MdAccountCircle } from 'react-icons/md';
import getConfig from 'next/config';
import { CircleButton } from '../blocks/Button';

const { publicRuntimeConfig } = getConfig();

const HeaderWrapper = styled.header`
  flex-grow: 1;
  padding-bottom : 64px;
`;

const BarWrapper = styled.div`
  && {
    background-color : ${(props) => props.theme.colors.primary}
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

const MenuButton = styled(CircleButton)`
  && {
    margin-left : -12px;
    margin-right : 20px;
  }
`;

const LogoImage = styled.img`
`;

@inject('store') @observer
class Header extends React.Component {
  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.store.logout();
  };

  accountMenu() {
    return (
      <Menu>
        <Menu.Item key='0' onClick={this.handleLogout}>Logout</Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <HeaderWrapper>
        <BarWrapper position='fixed' component='div'>
          <Toolbar variant='dense'>
            <MenuButton
              aria-label='Menu'
              onClick={this.props.handleHamburgerMenu}
            ><MdMenu size={24}/></MenuButton>
            <FlexDiv>
              <LogoImage
                src={`${publicRuntimeConfig.staticDomain}/public/images/logo.png`}
                alt='Valinor'
                width='158'
                height='35'
              />
            </FlexDiv>
            {this.props.store.auth ? (
              <Dropdown overlay={this.accountMenu()} trigger={['click']}>
                <CircleButton
                  aria-haspopup='true'
                  color='inherit'
                ><MdAccountCircle size={24} /></CircleButton>
              </Dropdown>
            ) : (
              <></>
            )}
          </Toolbar>
        </BarWrapper>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  handleHamburgerMenu: func,
  store: object,
};

export default Header;
