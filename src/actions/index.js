let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const clearTodo = () => {
  return {
    type: 'CLEAR_TODO'
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}