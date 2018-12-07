import React, { Component } from 'react';
import Routes from '../../routes';
import { Layout } from 'antd';
const styles = require('./index.scss');
const { Header, Content, Footer, Sider } = Layout;
class LayoutContainer extends Component {
  render() {
    console.log(styles, 'style');
    return (
      <Layout className={styles.layout}>
        <Sider><div className={styles.aa}>Sider</div></Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Routes />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
