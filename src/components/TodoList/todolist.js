import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import Todo from './todo'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../redux/actions/todolist'
class TodoList extends React.Component {
  render() {
    console.log(this.props)
    let data = this.props.todos
    let title = this.props.title
      ; ((title === 'ALL' && (title = "全部")) || (title === 'ACTIVE' && (title = "进行中")) || ((title === 'COMPLETED' && (title = "已完成"))));
    return (
      <Card title={title} bordered={false}>
        <List
          className="cardCss"
          dataSource={data}
          renderItem={todo => (
            <Todo key={todo.id}
              {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
              onDelete={() => this.props.onTodoDelete(todo.id)} />
          )}
        />
      </Card>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    case 'ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    todos: getVisibleTodos(state.todolist.todolist, state.todolist.status),
    title: state.todolist.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)