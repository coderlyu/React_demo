import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 }
}

class Index extends Component {
  onFinish = (values) => {
    message.success('登录成功')
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  render() {
    return (
      <div className="login">
        <Card>
          <h1 className="login-title">登录</h1>
          <Form
            style={{ width: '400px' }}
            {...layout}
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!'
                },
                {
                  pattern: /^[a-zA-Z]{4,20}$/,
                  message: '用户名不合法(只能输入4-20位字母)'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: '请输入密码!' },
                {
                  pattern: /^[a-zA-Z0-9]{4,20}$/,
                  message: '密码不合法(只能输入4-20位字母和数字)'
                }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Index
