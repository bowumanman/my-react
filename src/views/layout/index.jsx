import React, { Component } from 'react';
import Routes from '../../routes';
import { Layout } from 'antd';
import styles from './index.scss';
const { Header, Content, Footer, Sider } = Layout;
class LayoutContainer extends Component {
  render() {
    console.log(styles, 'styles');
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <div className={styles.item}>item>>>>></div>
            <div className='item'>item>>>>></div>
            <Routes />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
