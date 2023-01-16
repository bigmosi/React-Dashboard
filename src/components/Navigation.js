import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FileOutlined, AppstoreOutlined, CalendarOutlined, MessageOutlined, MailOutlined, InboxOutlined, WifiOutlined, CodepenOutlined } from "@ant-design/icons";
import NavigationHeader from './Header';
import CardHeader from './Card';
import Graph from './BarChart';
import LeftContainer from './LeftContainer';
import hamburger from "../images/dashboard-menu.svg"

import {
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

export default function DashboardLayout() {
  const [isMenuOpenedOnMobile, setIsMenuOpenedOnMobile] = useState(false);
  const [isMenuCollapsedOnDesktop, setIsMenuCollapsedOnDesktop] =
    useState(false);

  const styles = isMenuOpenedOnMobile
    ? { position: 'fixed', display: 'block', zIndex: '100' }
    : {};

  const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

  return (
    <Layout>
      <Layout.Sider
        trigger={null}
        collapsible
        className="sideNavigationBar"
        collapsed={isMenuCollapsedOnDesktop}
        width={250}
        style={styles}
      >
        <div>
          <div>
            <CloseOutlined
              className='text-white'
              onClick={() => setIsMenuOpenedOnMobile(false)}
            />
          </div>

          <div>
            <img
              onClick={() =>
                setIsMenuCollapsedOnDesktop(!isMenuCollapsedOnDesktop)
              }
              src={hamburger}
              height={15}
              width={80}
              alt="Logo"
              style={{ margin: 'auto' }}
              className="hamburger-menu"
            />
          </div>
        </div>
        <Menu
          style={{ backgroundColor: '#11192B' }}
          theme="dark"
          mode="inline"
          // @ts-ignore
        >
        </Menu>
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
      </Layout.Sider>

      <Layout className="site-layout">
        <Layout.Header
          style={{ padding: 0, height: '80px' }}
        >
          <Menu
            mode="horizontal"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {!isMenuOpenedOnMobile && (
              <div>
                <MenuOutlined
                className='mobileNavigationBar'
                  style={{ fontSize: '30px', marginRight: '10px' }}
                  onClick={() => setIsMenuOpenedOnMobile(!isMenuOpenedOnMobile)}
                />
                <img
                  src=""
                  height={40}
                  width={120}
                  alt="darklight"
                />
              </div>
            )}
          </Menu>
        </Layout.Header>
        <Layout.Content
        >
            <Layout className='layutContainer'>
          <NavigationHeader />
          <div className='bodyContainer'>
           <div className='main-contaner'>
            <CardHeader />
           <Content className='border mt-50'>
             <Graph />
           </Content>
           </div>
           <LeftContainer />
          </div>
           <Footer style={{ textAlign: 'center' }}>
             Built By Kinyera Amos
           </Footer>
         </Layout>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

