import { Layout } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import Header from './Header'
import Nav from './Nav'
import PropTypes from 'prop-types'
import { toggleCollapse } from '../../redux/actions/app.js'
import { Redirect, Route } from 'react-router-dom'
import {
  Home,
  Cart,
  Product,
  TodoList,
  ProductDetail
} from '../../router/index'
// import GenerateRoutes from '../../utils/generate_routes'
class Layout_ extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  static propTypes = {
    toggleCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired
  }
  toggle = () => {
    this.props.toggleCollapsed()
  }
  render() {
    const { match } = this.props
    console.log('match', match)
    return (
      <Layout style={{ height: '100%' }}>
        <Nav collapsed={this.props.collapsed} />
        <Layout className="site-layout">
          <Header collapsed={this.props.collapsed} onToggle={this.toggle} />
          <Content>
            {/* {this.props.children} */}
            <Redirect exact from={match.url} to={`${match.url}home`} />
            <Route
              exact
              path={`${match.url}home`}
              component={Home}
              state={{ title: '主页' }}
            ></Route>
            <Route
              exact
              path={`${match.url}cart`}
              component={Cart}
              state={{ title: '购物车' }}
            ></Route>
            <Route
              exact
              path={`${match.url}product`}
              component={Product}
              state={{ title: '商品列表' }}
            ></Route>
            <Route
              exact
              path={`${match.url}product/detail/:id`}
              component={ProductDetail}
              state={{ title: '商品详情' }}
            ></Route>
            <Route
              exact
              path={`${match.url}todolist`}
              component={TodoList}
              state={{ title: 'todolist' }}
            ></Route>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    collapsed: state.app.collapsed,
    token: state.user.token
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
