let initState = []
const todos = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'CLEAR_TODO':
      return []
    case 'DELETE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id
      })
    default:
      return state
  }
}

export default todos