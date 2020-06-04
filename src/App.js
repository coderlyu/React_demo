import React from 'react'
import Footer from './components/Footer.js'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Card } from 'antd'
import './css/app.css'
const App = () => (
  // <div>
  //   <AddTodo />
  //   <VisibleTodoList />
  //   <Footer />
  // </div>
  <div className="todo-list">
    <Card title="TODO LIST" style={{ width: 500 }}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Card>
  </div>
)

export default App