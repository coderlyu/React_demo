import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
class Content_ extends Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {this.props.children || 'Content'}
      </Content>
    );
  }
}

export default Content_;