import React, { Component } from 'react'
import '../../assets/css/404.css'
import { withRouter } from 'react-router-dom'

class NotFound extends Component {
  handleLink = () => {
    this.props.history.push('/homt')
  }
  render() {
    console.log(this.props)
    return (
      <div className={'error'}>
        <article>
          <h1 data-content="404">404</h1>
          <section>
            <p>你访问的页面失联了，请联系管理员</p>
            <button onClick={this.handleLink}>返回主页</button>
          </section>
        </article>
      </div>
    )
  }
}

export default withRouter(NotFound)
