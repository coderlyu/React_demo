import React from 'react'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
const { Sider } = Layout

class Nav extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    console.log('nav', this.props)
    const { location, collapsed } = this.props
    let defaultKey =
      location.pathname === '/' || location.pathname === '/home'
        ? '/home'
        : location.pathname
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={collapsed ? 'hidden' : 'logo'}>CODERLY</div>
        <img
          className={collapsed ? 'logo logo-img' : 'hidden'}
          src="/images/avatar.jpg"
          alt="头像"
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultKey}>
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
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(Nav)
