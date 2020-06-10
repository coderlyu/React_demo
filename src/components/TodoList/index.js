import React, { Component } from 'react'
import TodoList from './todolist'
import AddTodo from './AddTodo.js'
import Footer from './footer.js'
import { Card } from 'antd'
class TodoIndex extends Component {
  render() {
    return (
      <div className="todo-list">
        <Card title="TODO LIST" style={{ width: 500 }}>
          <AddTodo />
          <TodoList />
          <Footer />
        </Card>
      </div>
    )
  }
}

export default TodoIndex
