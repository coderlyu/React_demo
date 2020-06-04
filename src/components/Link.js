import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd';
class Link extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Radio.Button value={this.props.tagVal} onClick={this.props.onClick}>{this.props.children}</Radio.Button>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link