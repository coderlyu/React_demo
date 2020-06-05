import React from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const { Sider } = Layout;


export default class Nav extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  }
  menuClick = (menu) => {
    console.log(menu.key)
  }
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed} >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} onClick={this.menuClick}>
          <Menu.Item key="/home" icon={<UserOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="/product" icon={<VideoCameraOutlined />}>
            <Link to="/product">商品</Link>
          </Menu.Item>
          <Menu.Item key="/cart" icon={<UploadOutlined />}>
            <Link to="/cart">购物车 </Link>
          </Menu.Item>
          <Menu.Item key="/todolist" icon={<UploadOutlined />}>
            <Link to="/todolist">任务列表</Link>
          </Menu.Item>
          {/* <Menu.Item key="/home" icon={<UserOutlined />}>
            <a href="/home">首页</a>
          </Menu.Item>
          <Menu.Item key="/product" icon={<VideoCameraOutlined />}>
            <a href="/product">商品</a>
          </Menu.Item>
          <Menu.Item key="/cart" icon={<UploadOutlined />}>
            <a href="/cart">购物车 </a>
          </Menu.Item>
          <Menu.Item key="/todolist" icon={<UploadOutlined />}>
            <a href="/todolist">任务列表</a>
          </Menu.Item> */}

          {/* <a href="/home">
            <Menu.Item key="/home" icon={<UserOutlined />}>首页</Menu.Item>
          </a>
          <a href="/product">
            <Menu.Item key="/product" icon={<VideoCameraOutlined />}>商品</Menu.Item>
          </a>
          <a href="/cart">
            <Menu.Item key="/cart" icon={<UploadOutlined />}>购物车</Menu.Item>
          </a>
          <a href="/todolist">
            <Menu.Item key="/todolist" icon={<UploadOutlined />}>任务列表</Menu.Item>
          </a> */}
        </Menu>
      </Sider>
    )
  }
}