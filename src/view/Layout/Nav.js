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
  constructor(props) {
    super(props)
    this.state = {
      defaultKey: '/home'
    }
  }
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  componentWillUpdate(nextProps) {
    // console.log('nextProps', nextProps)
    if (this.state.defaultKey !== nextProps.location.pathname) {
      this.setState({
        defaultKey: nextProps.location.pathname
      })
    }
  }
  defaultKeyChange = (key) => {
    this.setState({
      defaultKey: key
    })
  }
  render() {
    const { collapsed } = this.props
    // let defaultKey =
    //   location.pathname === '/' || location.pathname === '/home'
    //     ? '/home'
    //     : location.pathname
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={collapsed ? 'hidden' : 'logo'}>CODERLY</div>
        <img
          className={collapsed ? 'logo logo-img' : 'hidden'}
          src="/images/avatar.jpg"
          alt="头像"
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={this.state.defaultKey}
          onSelect={({ item, key, keyPath, selectedKeys, domEvent }) =>
            this.defaultKeyChange(key)
          }
        >
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
