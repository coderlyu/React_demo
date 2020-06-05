import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types'

const { Header } = Layout;
class Header_ extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  }
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => this.props.onToggle(),
        })}
      </Header>
    );
  }
}

export default Header_;