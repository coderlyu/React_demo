import { all } from 'redux-saga/effects'
import products from './products' // product saga

export default function* rootSaga() {
  yield all([products()]) // 可以添加多个，引入并执行是因为导出的是函数，执行之后才可以获取到里面的内容并暂停
}
