import React from 'react';
import { inject, observer } from 'mobx-react';
import "./styles";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import Drawer from 'rc-drawer';

@inject('store') @observer
class Page extends React.Component {
  render() {
    return (
     <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        <Drawer width="200px">
          <p>asdas</p>
        </Drawer>
      </Layout>
    </Layout>
    );
  }
}

export default Page;
