import React, { Component } from 'react'
import PropTypes from 'prop-types'
class DialogItem extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  static defaultProps = {
    item: ''
  }
  render() {
    const { item, handleClick, index } = this.props
    return <li onClick={() => handleClick(index)}>{!!item ? item : null}</li>
  }
}

export default DialogItem
