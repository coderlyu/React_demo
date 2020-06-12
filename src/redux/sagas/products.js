import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_ALL_PRODUCT,
  BUY_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS
} from '../types/index'
// call // 发起请求
// put // 发起 action
export default function* () {
  // 每次点击都会执行
  yield takeEvery(GET_ALL_PRODUCT, function* () {
    try {
      const res = yield call(axios.get, 'http://127.0.0.1:3002')
      if (res.code === 200) {
        put({ type: GET_PRODUCT_ERROR, data: res.data }) // 请求成功，存储返回的结果
      } else {
        put({ type: GET_PRODUCT_SUCCESS, error: '失败' }) // 请求失败，通知显示失败的结果
      }
    } catch (error) {
      put({ type: GET_PRODUCT_SUCCESS, error }) // 请求失败，通知显示失败的结果
    }
  })
  // 多次点击，会将之前的请求撤销，并请求当前这个
  yield takeLatest(BUY_PRODUCT, function* () {
    try {
      const res = yield call(axios.get, 'http://127.0.0.1:3002')
      if (res.code === 200) {
        put({ type: GET_PRODUCT_ERROR, data: res.data }) // 请求成功，存储返回的结果
      } else {
        put({ type: GET_PRODUCT_SUCCESS, error: '失败' }) // 请求失败，通知显示失败的结果
      }
    } catch (error) {
      put({ type: GET_PRODUCT_SUCCESS, error }) // 请求失败，通知显示失败的结果
    }
  })
  // 多次点击，会将之前的请求撤销，并请求当前这个
  yield takeLatest(BUY_PRODUCT, function* () {
    try {
      const res = yield call(axios.get, 'http://127.0.0.1:3002')
      if (res.code === 200) {
        put({ type: GET_PRODUCT_ERROR, data: res.data }) // 请求成功，存储返回的结果
      } else {
        put({ type: GET_PRODUCT_SUCCESS, error: '失败' }) // 请求失败，通知显示失败的结果
      }
    } catch (error) {
      put({ type: GET_PRODUCT_SUCCESS, error }) // 请求失败，通知显示失败的结果
    }
  })
}
