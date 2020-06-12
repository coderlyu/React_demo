import React from 'react'
import Layout from './view/Layout'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import { NotFound, Login, Logout } from './router/index'
import { connect } from 'react-redux'
class App extends React.Component {
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
    )
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}
export default connect(mapStateToProps)(withRouter(App))
