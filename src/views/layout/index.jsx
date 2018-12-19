import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class LayoutContainer extends Component {
  state={
    name: '1',
    list: [ 12, 3, 4, 5 ]
  }
  render() {
    const {name} =this.state;
    if (name==='1') {
      return '123';
    }
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
              {this.children} {name}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
