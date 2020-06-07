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
const Loading = () => null //加载时不显示loading

// const ProductsContainer = Loadable({
//   loader: () => import('../view/ProductsContainer'), //按需加载 点击时只加载一个页面
//   loading: Loading
// })
// const CartContainer = Loadable({
//   loader: () => import('../view/CartContainer'),
//   loading: Loading
// })
// const Layout = Loadable({
//   loader: () => import('../components/Layout/index'),
//   loading: Loading
// })

// 公共路由
// const commonRoutes = [
//   {
//     path: '/home',
//     component: Loadable({
//       loader: () => import('../components/Home/inde'),
//       loading: Loading
//     })
//   },
//   {
//     path: '/todolist',
//     component: Loadable({
//       loader: () => import('../components/TodoList/index'),
//       loading: Loading
//     })
//   },
//   {
//     path: '/Product',
//     redirect: '/Product/index',
//     routes: [
//       {
//         path: '/Product/index',
//         component: Loadable({
//           loader: () => import('../components/Product/index'),
//           loading: Loading
//         })
//       },
//       {
//         path: '/Product/detail/:id',
//         component: Loadable({
//           loader: () => import('../components/Product/detail'),
//           loading: Loading
//         })
//       }
//     ]
//   },
//   {
//     path: '/Cart',
//     component: Loadable({
//       loader: () => import('../components/Cart/index'),
//       loading: Loading
//     })
//   }
// ]
// 私有路由
// const privateRoutes = [
//   {
//     path: '/todolist',
//     components: Loadable({
//       loader: () => import('../components/TodoList/index'),
//       loading: Loading
//     })
//   }
// ]
// export default commonRoutes
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
  // loader: () => import('../components/Product/index'),
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
export { Cart, Home, Product, TodoList, ProductDetail } //将页面导出
