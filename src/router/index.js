import Loadable from 'react-loadable'
// 意思是在加载的时候 显示 ，加载组件没有组件的时候 我们可以写为
const Loading = () => null // 加载时不显示loading

const Cart = Loadable({
  loader: () => import('../view/cart/index'),
  loading: Loading
})
const Home = Loadable({
  loader: () => import('../components/Home/inde'),
  loading: Loading
})
const Product = Loadable({
  loader: () => import('../view/product'),
  loading: Loading
})
const TodoList = Loadable({
  loader: () => import('../components/TodoList/index'),
  loading: Loading
})
const ProductDetail = Loadable({
  loader: () => import('../components/Product/detail'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('../view/404/index'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('../view/login/index'),
  loading: Loading
})
const Logout = Loadable({
  loader: () => import('../view/login/logout'),
  loading: Loading
})
const Game = Loadable({
  loader: () => import('../view/game/index'),
  loading: Loading
})
export {
  Cart,
  Home,
  Product,
  TodoList,
  ProductDetail,
  NotFound,
  Login,
  Logout,
  Game
} //将页面导出
