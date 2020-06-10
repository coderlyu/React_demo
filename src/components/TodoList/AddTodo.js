import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todolist'
import { Form, Input, Button } from 'antd'

class AddTodo extends React.Component {
<<<<<<< HEAD:src/containers/AddTodo.js
=======
  addTodoList = (values) => {
    this.props.onAddTodo(values.todo)
    this.refs.form.resetFields()
    this.refs.inputVal.focus()
  }
>>>>>>> shopping_cart:src/components/TodoList/AddTodo.js
  render() {
    return (
      <Form
        layout="inline"
        name="basic"
        ref="form"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={this.addTodoList}
      >
        <Form.Item
          name="todo"
          rules={[{ required: true, message: 'Please input your todo!' }]}
        >
          <Input
            placeholder="add one todo"
            ref="inputVal"
            style={{ width: '330px', display: 'inline-block' }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加记录
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
