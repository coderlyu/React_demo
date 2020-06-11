import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER
} from '../types/index'
// let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: +new Date(), // 用当前时间戳做id，防止id重复
    // id: nextTodoId++,
    text
  }
}

export const clearTodo = () => {
  return {
    type: CLEAR_TODO
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}
