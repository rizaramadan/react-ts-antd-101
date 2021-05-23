import { Component } from 'react';
import { StaticContext } from 'react-router';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthContext from '../components/AuthContext';
import './Login.css';



class Login extends Component<RouteComponentProps<any, StaticContext, unknown>, any, any> {
  constructor(props: RouteComponentProps<any, StaticContext, unknown>) {
    super(props)
    this.login = this.login.bind(this)
  }
  
  onFinish(values: any) {
    console.log('Received values of form: ', values);
  }

  login() {
    AuthContext.isLoggedIn = true;
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <Row justify="space-around" align="middle" style={{marginTop:"25vh"}}> 
            <Form
              name="normal-login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>
                  Log in
                </Button>
                &nbsp; Or <a href="">register now!</a>
              </Form.Item>
            </Form>
        </Row>
      </>
    )
  }
}

export default withRouter(Login);
