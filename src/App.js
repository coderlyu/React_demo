import React from 'react'
import Layout from './view/Layout'
// import { BrowserRouter as Router } from 'react-router-dom' // 引入路由
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import {
  NotFound
  // Home,
  // Cart,
  // Product,
  // TodoList,
  // ProductDetail
} from './router/index'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path404: '/404'
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route path="/" component={Layout}></Route>
        <Redirect to="/404"></Redirect>
        {/* <Route exact path="/404" component={NotFound}></Route>) : (
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route
          exact
          path="/product/detail/:id"
          component={ProductDetail}
        ></Route>
        <Route exact path="/todolist" component={TodoList}></Route>
        <Route path="/404" /> */}
      </Switch>
      // <Switch>
      //   {this.props.match.path === this.state.path404} ? (
      //   <Route exact path="/404" component={NotFound}></Route>) : (
      //   <Layout>
      //     <Redirect exact from="/" to="/home" />
      //     <Route exact path="/home" component={Home}></Route>
      //     <Route exact path="/cart" component={Cart}></Route>
      //     <Route exact path="/product" component={Product}></Route>
      //     <Route
      //       exact
      //       path="/product/detail/:id"
      //       component={ProductDetail}
      //     ></Route>
      //     <Route exact path="/todolist" component={TodoList}></Route>
      //     <Route path="/404" />
      //   </Layout>
      //   )
      // </Switch>
    )
  }
}
export default withRouter(App)
