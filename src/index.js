import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/index'
import './assets/css/index.css' // 引入 antd UI
import App from './App'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
