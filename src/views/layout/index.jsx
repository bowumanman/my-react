import React, { Component } from 'react';
import Routes from '../../routes';
import { Layout } from 'antd';
import './index.scss';
import styles from './index.1.scss';
// const { Header, Content, Footer, Sider } = Layout;
const styless = require('./index.2.scss');
class LayoutContainer extends Component {
  render() {
    console.log(styles, 'styles');
    console.log(styless, 'styless');
    return (
      <Layout>
        {/* <Sider><div className="a">Sider</div></Sider>
        <Layout>
          <Header>Header</Header>
          <Content> */}
            <div className={`${styles.a} item`}></div>
            <div className={`${styless.a} item`}></div>
            <div className={`${styles.a} item`}></div>
            <Routes />
          {/* </Content>
          <Footer>Footer</Footer>
        </Layout> */}
      </Layout>
    );
  }
}

export default LayoutContainer;
