
// export { default as ProductsContainer } from '../view/ProductsContainer'
// export { default as CartContainer } from '../view/CartContainer'
// export { default as Layout } from '../components/Layout/index'
// export { default as Cart } from '../components/Cart/index'
// export { default as Home } from '../components/Home/inde'
// export { default as Product } from '../components/Product/index'
// export { default as TodoList } from '../components/TodoList/index'
//pages>index.js
import Loadable from 'react-loadable'
// import Loading from './my-loading-component';
// 意思是在加载的时候 显示 都加载组件没有组件的时候 我们可以写为
const Loading = () => null;  //加载时不现实loading

const ProductsContainer = Loadable({
  loader: () => import('../view/ProductsContainer'), //按需加载 点击时只加载一个页面
  loading: Loading,
});
const CartContainer = Loadable({
  loader: () => import('../view/CartContainer'),
  loading: Loading,
});
const Layout = Loadable({
  loader: () => import('../components/Layout/index'),
  loading: Loading,
});
const Cart = Loadable({
  loader: () => import('../components/Cart/index'),
  loading: Loading,
});
const Home = Loadable({
  loader: () => import('../components/Home/inde'),
  loading: Loading,
});
const Product = Loadable({
  loader: () => import('../components/Product/index'),
  loading: Loading,
});
const TodoList = Loadable({
  loader: () => import('../components/TodoList/index'),
  loading: Loading,
});
export {
  ProductsContainer, CartContainer, Layout, Cart, Home, Product, TodoList
}//将页面导出