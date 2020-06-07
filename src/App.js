import React from 'react'
import { Layout } from './router/index'
import { BrowserRouter as Router } from 'react-router-dom' // 引入路由

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    )
  }
}
