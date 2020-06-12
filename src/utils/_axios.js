import axios from 'axios'
import qs from 'qs'
import router from './router'
import store from './store'
import { getToken } from './_ls'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '/api' : 'http://127.0.0.1:3002', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000,
  transformRequest: [
    function (data) {
      // 统一对发送的数据进行stringify处理
      const d = qs.stringify(data)
      return d
    }
  ]
})

service.interceptors.request.use(
  (config) => {
    config.headers['authorization-token'] = getToken() || ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 2 || res.code === 4) {
      router.replace({
        path: 'login',
        query: { redirect: router.currentRoute.fullPath }
      })
    }
    return res
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
