import { Layout } from 'antd';
import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import Header from './Header'
import Nav from './Nav'
import PropTypes from 'prop-types'
import { toggleCollapse } from '../../redux/actions/app.js'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, Cart, Product, TodoList } from '../../router/index'
class Layout_ extends React.Component {
  static propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired
  }
  toggle = () => {
    this.props.toggleCollapsed()
  }
  render() {
    return (
      <Layout style={{ height: '100%' }} >
        <Nav collapsed={this.props.collapsed} />
        <Layout className="site-layout">
          <Header collapsed={this.props.collapsed} onToggle={this.toggle} />
          <Content>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/todolist">
                <TodoList />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    collapsed: state.app.collapsed
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCollapsed: () => {
      dispatch(toggleCollapse())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout_)