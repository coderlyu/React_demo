import { getTodoList, setTodoList, removeTodoList } from '../../utils/_ls'
let initState = {
  todolist: getTodoList() || [],
  status: 'ALL'
}
const todos = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todos = [
        ...state.todolist,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      setTodoList(todos)
      return Object.assign({}, state, {
        todolist: todos
      })

    case 'TOGGLE_TODO':
      // debugger
      return Object.assign({}, state, {
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      })
    case 'CLEAR_TODO':
      removeTodoList()
      return {
        todolist: [],
        status: 'ALL'
      }
    case 'DELETE_TODO':
      let todos2 = state.todolist.filter((todo) => {
        return todo.id !== action.id
      })
      setTodoList(todos2)
      return Object.assign({}, state, {
        todolist: todos2
      })
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        status: action.filter
      })
    default:
      return state
  }
}

export default todos
