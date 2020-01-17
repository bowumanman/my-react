import React, { Component } from 'react';
import { Layout, Drawer } from 'antd';
import { Head, Menu } from '../../component';
import {getLayoutRouter} from '@/routes/routers';
import store from '@/store';
const { Header, Content, Footer, Sider } = Layout;
// const styles = require('./index.scss');
class LayoutContainer extends Component {
  state={
    collapsed: false,
    menuPosition: 'left', // top  left
    visible: false,
    isMobel: false
  }
  onChangeOpen = (collapsed) => {
    const { isMobel } = this.state;
    if (isMobel) {
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        collapsed: !collapsed
      });
    }
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { collapsed, menuPosition, visible, isMobel } = this.state;
    const routerName = this.props.location.pathname;
    return (
      <Layout className={menuPosition === 'top' ? 'layout-top' : ''}>
          {
            menuPosition === 'left' ?
              isMobel ? 
                <Drawer
                  placement="left"
                  onClose={this.onClose}
                  visible={visible}
                  closable={false}
                  width={200}
                >
                  <Sider 
                    width="200px"
                    trigger={null}
                    collapsible 
                    collapsed={collapsed}
                  >
                    <Menu mode="inline" routerName={routerName} />
                  </Sider>
                </Drawer>
              :   
              <Sider 
                width="200px"
                trigger={null}
                collapsible 
                collapsed={collapsed}
              >
                <Menu mode="inline" routerName={routerName} />
              </Sider>
            :
            null 
          }
        <Layout>
          <Header>
            <Head onChangeOpen={this.onChangeOpen} menuPosition={menuPosition} isMobel={isMobel} visible={visible} >
              { menuPosition === 'top' ? <Menu mode="horizontal" /> : null }
            </Head>
          </Header>
          <Content>
            {getLayoutRouter(store)}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
