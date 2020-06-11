import React, { Component } from 'react'

class ErrorIndex extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
          Something went wrong.
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorIndex
