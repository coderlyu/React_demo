import React, { Component } from 'react'
import '../../assets/css/dialog.css'
import PropTypes from 'prop-types'
import { Button } from 'antd'
class Dialog extends Component {
  static propTypes = {
    show: PropTypes.bool,
    handleHiddenClick: PropTypes.func.isRequired
  }
  static defaultProps = {
    show: false
  }
  render() {
    return (
      <div className="mask">
        <div className="dialog">
          <Button
            className="dialog_close"
            type="danger"
            onClick={this.props.handleHiddenClick}
          >
            CLOSE
          </Button>
        </div>
      </div>
    )
  }
}

export default Dialog
