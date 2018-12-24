import React, { Component } from 'react';
import { Layout } from 'antd';
import { Head, Menu } from '../../component';
const { Header, Content, Footer, Sider } = Layout;
// const styles = require('./index.scss');
class LayoutContainer extends Component {
  state={
    collapsed: false,
    menuPosition: 'left' // top  left
  }
  onChangeOpen = (collapsed) => {
    this.setState({
      collapsed: !collapsed
    });
  }
  render() {
    const { collapsed, menuPosition } = this.state;
    return (
      <Layout className={menuPosition === 'top' ? 'layout-top' : ''}>
          {
            menuPosition === 'left' ?
              <Sider 
                width="200px"
                trigger={null}
                collapsible 
                collapsed={collapsed}
              >
                <Menu mode="inline" />
              </Sider> 
            :
            null 
          }
        <Layout>
          <Header>
            <Head onChangeOpen={this.onChangeOpen} menuPosition={menuPosition}>
              { menuPosition === 'top' ? <Menu mode="horizontal" /> : null }
            </Head>
          </Header>
          <Content>
              {this.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
