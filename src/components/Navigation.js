import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import NavigationHeader from './Header';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
              <span>Menu</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Dashboard</span></span>}
            >
              <Menu.Item key="2">Ecommerce</Menu.Item>
              <Menu.Item key="3">Saas</Menu.Item>
              <Menu.Item key="4">Crypto</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <span>APLICATIONS</span>
            </Menu.Item>
            <Menu.Item key="6">
              <span>Calender</span>
            </Menu.Item>
            <Menu.Item key="7">
              <span>Chat</span>
            </Menu.Item>
            <Menu.Item key="8">
              <span>File Element</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Ecommerce</span></span>}
            >
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Email</span></span>}
            >
              <Menu.Item key="11">Team 1</Menu.Item>
              <Menu.Item key="12">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Invoices</span></span>}
            >
              <Menu.Item key="13">Team 1</Menu.Item>
              <Menu.Item key="14">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Projects</span></span>}
            >
              <Menu.Item key="15">Team 1</Menu.Item>
              <Menu.Item key="16">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Contacts</span></span>}
            >
              <Menu.Item key="17">Team 1</Menu.Item>
              <Menu.Item key="18">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="19">
              <span>Layout</span>
            </Menu.Item>
            <Menu.Item key="20">
              <span>PAGES</span>
            </Menu.Item>
            <Menu.Item key="21">
              <span>Authentication</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" />Utility</span>}
            >
              <Menu.Item key="22">Team 1</Menu.Item>
              <Menu.Item key="23">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="24">
              <span>UI Elements</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" />Utility</span>}
            >
              <Menu.Item key="25">Team 1</Menu.Item>
              <Menu.Item key="26">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="27">
              <span>UI Elements</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" />Forms</span>}
            >
              <Menu.Item key="28">Team 1</Menu.Item>
              <Menu.Item key="29">Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
         <NavigationHeader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Navigation;
