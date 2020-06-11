import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/index'
import './assets/css/index.css' // 引入 antd UI
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import App from './App'
import ErrorBound from './components/ErrorBoundaries' // 错误边界处理
render(
  <ConfigProvider locale={zhCN}>
    {/** 配置中文格式 */}
    <Provider store={store}>
      {/** 全局注入 store */}
      <Router>
        <ErrorBound>
          <App />
        </ErrorBound>
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
