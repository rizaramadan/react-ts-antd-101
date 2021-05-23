import { Component } from 'react';
import { StaticContext } from 'react-router';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from 'antd';
import TopbarLayout  from '../components/TopbarLayout';
import './Login.css';

class Home extends Component<RouteComponentProps<any, StaticContext, unknown>, any, any> {
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
