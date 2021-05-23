import { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from 'antd';
import TopbarLayout  from '../components/TopbarLayout';
import './Login.css';

class Home extends Component<RouteComponentProps> {
  render() {
    return (
      <>
        <TopbarLayout>
          <Button type="primary">Primary Button</Button>
        </TopbarLayout>
      </>
    )
  }
}

export default withRouter(Home);
