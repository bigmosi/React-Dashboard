import React from 'react';
import { Layout, Menu } from 'antd';
import { FileOutlined, AppstoreOutlined, CalendarOutlined, MessageOutlined, MailOutlined, InboxOutlined, WifiOutlined, CodepenOutlined } from "@ant-design/icons";
import NavigationHeader from './Header';
import CardHeader from './Card';
import Graph from './BarChart';
import LeftContainer from './LeftContainer';

const { Content, Footer, Sider } = Layout;
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
              title={<span><AppstoreOutlined /><span>Dashboard</span></span>}
            >
              <Menu.Item key="2">Ecommerce</Menu.Item>
              <Menu.Item key="3">Saas</Menu.Item>
              <Menu.Item key="4">Crypto</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <span>APLICATIONS</span>
            </Menu.Item>
            <Menu.Item key="6">
            <CalendarOutlined />
              <span>Calender</span>
            </Menu.Item>
            <Menu.Item key="7">
            <MessageOutlined />
              <span>Chat</span>
            </Menu.Item>
            <Menu.Item key="8">
            <FileOutlined />
              <span>File Element</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><InboxOutlined /><span>Ecommerce</span></span>}
            >
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><MailOutlined /><span>Email</span></span>}
            >
              <Menu.Item key="11">Team 1</Menu.Item>
              <Menu.Item key="12">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><InboxOutlined /><span>Invoices</span></span>}
            >
              <Menu.Item key="13">Team 1</Menu.Item>
              <Menu.Item key="14">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={<span><InboxOutlined /><span>Projects</span></span>}
            >
              <Menu.Item key="15">Team 1</Menu.Item>
              <Menu.Item key="16">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={<span><WifiOutlined /><span>Contacts</span></span>}
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
              title={<span><CodepenOutlined />Utility</span>}
            >
              <Menu.Item key="22">Team 1</Menu.Item>
              <Menu.Item key="23">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="24">
              <span>UI Elements</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><InboxOutlined />Utility</span>}
            >
              <Menu.Item key="25">Team 1</Menu.Item>
              <Menu.Item key="26">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="27">
              <span>UI Elements</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><InboxOutlined />Forms</span>}
            >
              <Menu.Item key="28">Team 1</Menu.Item>
              <Menu.Item key="29">Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
         <NavigationHeader />
         <div className='bodyContainer'>
          <div>
          <CardHeader />
          <Content>
            <Graph />
          </Content>
          </div>
          <LeftContainer />
         </div>

          <Footer style={{ textAlign: 'center' }}>
            Built By Kinyera Amos
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Navigation;
