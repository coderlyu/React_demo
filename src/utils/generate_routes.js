import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
export default class GenerateRoutes extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.any
      })
    ).isRequired
  }
  GenerateKey(i) {
    return Math.floor(Math.random() * 1000000 * i) + Date.now()
  }
  shouldComponentUpdate(nextState, nextProps) {
    if (this.props === nextProps) {
      return false
    }
    return true
  }
  render() {
    console.log('render')
    return (
      <>
        {this.props.routes.map((route, i) => {
          let arr = []
          if (route.hasOwnProperty('routes')) {
            // 判断是否有子路由
            arr.push(
              <GenerateRoutes
                routes={route.routes}
                key={route.path + this.GenerateKey(i)}
              ></GenerateRoutes>
            )
          }
          if (route.hasOwnProperty('redirect')) {
            // 判断是否是重定向
            arr.push(
              <Redirect
                trom={route.path}
                to={route.redirect}
                exact={route.hasOwnProperty('exact')}
                key={route.path + this.GenerateKey(i)}
              ></Redirect>
            )
          } else {
            // 不是重定向就是普通路由
            arr.push(
              <Route
                path={route.path}
                component={route.component}
                exact={route.hasOwnProperty('exact')}
                key={route.path + this.GenerateKey(i)}
              ></Route>
            )
          }
          return <>{arr}</>
        })}
      </>
    )
  }
}
