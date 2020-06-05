import { Layout } from 'antd';
import React from 'react'
import Content from './content'
import Header from './header'
import Nav from './nav'

export default class Layout_ extends React.Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    )
  }
}