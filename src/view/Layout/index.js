import { Layout } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import Header from './Header'
import Nav from './Nav'
import PropTypes from 'prop-types'
import { toggleCollapse } from '../../redux/actions/app.js'
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
// import GenerateRoutes from '../../utils/generate_routes'
import {
  Home,
  Cart,
  Product,
  TodoList,
  ProductDetail
} from '../../router/index'
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
    return (
      <Router>
        <Layout style={{ height: '100%' }}>
          <Nav collapsed={this.props.collapsed} />
          <Layout className="site-layout">
            <Header collapsed={this.props.collapsed} onToggle={this.toggle} />
            <Content>
              <Switch>
                {/* <GenerateRoutes routes={commonRoutes} /> */}
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/product" component={Product}></Route>
                <Route
                  path="/product/detail/:id"
                  component={ProductDetail}
                ></Route>
                <Route path="/todolist" component={TodoList}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
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
