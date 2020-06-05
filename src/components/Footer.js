import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Radio, Button } from 'antd'
import { connect } from 'react-redux'
import { clearTodo } from '../actions/index'
import { DeleteTwoTone } from '@ant-design/icons'
class Footer extends React.Component {
  render() {
    return (
      <div className="footer-btns">
        <Radio.Group defaultValue="all" buttonStyle="solid">
          <FilterLink filter="ALL" tagVal="all">ALL</FilterLink>
          <FilterLink filter="ACTIVE" tagVal="active">ACTIVE</FilterLink>
          <FilterLink filter="COMPLETED" tagVal="completed">COMPLETED</FilterLink>
        </Radio.Group>
        <Button danger shape="circle" icon={<DeleteTwoTone twoToneColor={this.props.disabled ? '#cacaca' : '#f00'} />} disabled={this.props.disabled} onClick={this.props.onClear}></Button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    disabled: state.todos.length === 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClear: () => {
      dispatch(clearTodo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)