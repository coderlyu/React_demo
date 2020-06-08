import React from 'react'
import Layout from './view/Layout'
// import { BrowserRouter as Router } from 'react-router-dom' // 引入路由
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import {
  NotFound,
  Login
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
  componentWillUpdate(nextState) {
    // console.log('nextState', nextState)
    // console.log(
    //   '---',
    //   this.props.history.listen((route) => {
    //     console.log(route)
    //   })
    // )
  }
  updateTitle = (props) => {
    // this
  }
  render() {
    return (
      <Switch>
        <Route exact path="/404" title="页面失联了" component={NotFound} />
        <Route exact path="/login" state="登录界面" component={Login} />
        <Route path="/" component={Layout}></Route>
        <Redirect to="/404"></Redirect>
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
