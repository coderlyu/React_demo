import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
// import Layout from './components/layout'
import {
  BrowserRouter as Router
} from "react-router-dom"; // 引入路由

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          {/* <Layout /> */}
          hello
        </Provider>
      </Router>
    )
  }
}