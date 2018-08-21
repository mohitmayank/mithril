import React from 'react';
import { bool, object } from 'prop-types';
import { Drawer } from 'antd';
import enquire from 'enquire.js';
import { styled, withTheme } from 'styled-components';
import Nav from './nav';


const AsideFlex = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  flex-shrink: 0;
  width: ${(props) => props.theme.sizes.aside.width};
  position : relative;
  margin-left: -${(props) => props.theme.sizes.aside.width};
  transition: margin 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  background : #fff;
  @media (${(props) => props.theme.screen.lte[props.theme.breakpoints.aside]}) {
    display : none;
  }
`;

AsideFlex.propTypes = {
  theme: object,
};

const PersistentAside = styled.div`
  position : absolute;
  display : block;
  height : 100%;
  right : 0;
  left : 0;
`;


class Aside extends React.Component {
  state = {
    persistent: false,
    visible: false,
    collapsed: false,
  }

  constructor(props) {
    super(props);
    this.asideQuery = `screen and (${this.props.theme.screen.gte[this.props.theme.breakpoints.aside]})`;
  }

  componentDidMount() {
    if (process.browser) {
      enquire.register(this.asideQuery, {
        match: () => this.setState({
          persistent: true,
          visible: false,
        }),
        unmatch: () => this.setState({
          persistent: false,
        }),
      });
    }
  }

  componentWillUnmount() {
    enquire.unregister(this.asideQuery);
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  toggle = () => {
    if (this.state.persistent) {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    } else {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  render() {
    const asideStyle = {
      marginLeft: '0',
    };

    if (this.state.persistent && !this.state.collapsed) {
      asideStyle.marginLeft = '0';
    } else {
      asideStyle.marginLeft = `-${this.props.theme.sizes.aside.width}`;
    }

    return (
      <>
        {!this.props.forceHide && (
          <AsideFlex style={asideStyle}>
            {this.state.persistent ? (
              <PersistentAside>
                <Nav/>
              </PersistentAside>
            ) : (
              <Drawer
                placement='left'
                closable={false}
                onClose={this.hide}
                visible={this.state.visible}
              ><Nav/></Drawer>
            )}
          </AsideFlex>
        )}
      </>
    );
  }
}

Aside.propTypes = {
  forceHide: bool,
  theme: object,
};

export default withTheme(Aside);
