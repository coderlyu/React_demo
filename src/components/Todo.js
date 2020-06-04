import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import { CheckCircleTwoTone, InfoCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

class Todo extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <List.Item
        style={{ cursor: 'pointer' }}
        actions={[this.props.completed ? <CheckCircleTwoTone onClick={this.props.onClick} twoToneColor="#52c41a" /> : <InfoCircleTwoTone onClick={this.props.onClick} />,
        <CloseCircleTwoTone onClick={this.props.onDelete} twoToneColor="#f00" />]}>
        <span style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }} onClick={this.props.onClick}>
          {this.props.text}
        </span>
      </List.Item>
    )
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todo