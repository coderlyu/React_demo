import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Input, Button } from 'antd'

class AddTodo extends React.Component {
  render() {
    const addTodoList = (values) => {
      this.props.onAddTodo(values.todo)
      this.refs.form.resetFields()
    }

    return (
      <Form
        layout="inline"
        name="basic"
        ref="form"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={addTodoList}
      >
        <Form.Item
          name="todo"
          rules={[{ required: true, message: 'Please input your todo!' }]}
        >
          <Input placeholder="add one todo" style={{ width: '331px', display: 'inline-block' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            addTodo
        </Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (values) => {
      dispatch(addTodo(values))
    }
  }
}
AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo