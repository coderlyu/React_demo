import { createStore, applyMiddleware } from 'redux' // applyMiddleware 作用是将所有中间件组成一个数组，依次执行
import { createLogger } from 'redux-logger' // 检测到action是一个函数会进行处理
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'

const middleware = [thunk] // 允许我们 dispatch() 函数
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger()) // 打印日志 中间件
}

const store = createStore(reducer, applyMiddleware(...middleware))

store.dispatch(getAllProducts())

export default store
