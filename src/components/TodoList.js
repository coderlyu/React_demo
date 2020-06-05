import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import Todo from './Todo'
import { Card } from 'antd'
import { connect } from 'react-redux'

class TodoList extends React.Component {
  render() {
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
  onTodoDelete: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    title: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(TodoList)