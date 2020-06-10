let initState = {
  todolist: [],
  status: 'ALL'
}
const todos = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todolist: [
          ...state.todolist,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      })

    case 'TOGGLE_TODO':
      debugger
      return Object.assign({}, state, {
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      })
    case 'CLEAR_TODO':
      return {
        todolist: [],
        status: 'ALL'
      }
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todolist: state.todolist.filter((todo) => {
          return todo.id !== action.id
        })
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
