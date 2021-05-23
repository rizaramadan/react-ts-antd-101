
import { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './TopbarLayout.css'

const { Header, Content, Footer } = Layout;


class TopbarLayout extends Component {
  constructor(props : any) {
    super(props)
  }

  render(){ return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content id="content">
        <div className="site-layout-content">
          {this.props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }} id="footer">
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )}
}

export default TopbarLayout
