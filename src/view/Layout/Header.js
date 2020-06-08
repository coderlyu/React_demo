import React, { Component } from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { Header } = Layout
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/home">主页</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/cart">购物车</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/404">404</Link>
    </Menu.Item>
  </Menu>
)
class Header_ extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  }
  render() {
    return (
      <Header
        className="site-layout-background header-wrapper"
        style={{ padding: 0 }}
      >
        {React.createElement(
          this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => this.props.onToggle()
          }
        )}
        <Dropdown overlay={menu}>
          <a
            href="/"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <img
              className="logo logo-img"
              src="/images/avatar.jpg"
              alt="头像"
            />
            <DownOutlined />
          </a>
        </Dropdown>
      </Header>
    )
  }
}

export default Header_
