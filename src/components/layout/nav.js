import React from 'react';
import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { MdHome } from 'react-icons/md';
import { Link } from '../../router';

const Menu = styled(AntMenu)`
  border-right : none;
`;

const Anchor = styled.a`
  >span {
    vertical-align : middle;
    padding-left : ${(props) => props.theme.spacing.padding};
  }
  > svg {
    vertical-align : middle;
  }
`;

function Nav() {
  return (
    <Menu>
      <Menu.Item><Link route='/'><Anchor><MdHome size={18}/><span>Home</span></Anchor></Link></Menu.Item>
    </Menu>
  );
}

export default Nav;
