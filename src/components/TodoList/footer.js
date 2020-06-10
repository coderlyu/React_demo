import React from 'react'
import FilterLink from './link'
import { Radio, Button } from 'antd'
import { connect } from 'react-redux'
import { clearTodo } from '../../redux/actions/todolist'
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
    disabled: state.todolist.todolist.length === 0
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