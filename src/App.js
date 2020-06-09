import React from 'react'
import Layout from './view/Layout'
// import { BrowserRouter as Router } from 'react-router-dom' // 引入路由
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import {
  NotFound,
  Login,
  Logout
  // Home,
  // Cart,
  // Product,
  // TodoList,
  // ProductDetail
} from './router/index'
import { connect } from 'react-redux'
class App extends React.Component {
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
    const { token } = this.props
    return (
      <Switch>
        <Route
          exact
          path="/404"
          state={{ title: '页面失联了' }}
          component={NotFound}
        />
        <Route
          exact
          path="/login"
          state={{ title: '登录界面' }}
          component={Login}
        />
        <Route
          exact
          path="/logout"
          state={{ title: '登出界面' }}
          component={Logout}
        />
        {!!token ? (
          <Route path="/" component={Layout}></Route>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
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
const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}
export default connect(mapStateToProps)(withRouter(App))
