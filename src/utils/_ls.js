const cart = 'cart'
const token = 'auth'
const todos = 'todos'
// 用户本地存储操作
export const getUserToken = function () {
  return JSON.parse(localStorage.getItem(token))
}
export const setUserToken = function (user) {
  localStorage.setItem(token, JSON.stringify(user))
}
export const removeUserToken = function () {
  localStorage.removeItem(token)
}

// 购物车本地存储操作

export const getCart = function () {
  return JSON.parse(localStorage.getItem(cart))
}
export const setCart = function (carts) {
  localStorage.setItem(cart, JSON.stringify(carts))
}
export const removeCart = function () {
  localStorage.removeItem(cart)
}

// TODOLIST 本地存储操作

export const getTodoList = function () {
  return JSON.parse(localStorage.getItem(todos))
}
export const setTodoList = function (todolist) {
  localStorage.setItem(todos, JSON.stringify(todolist))
}
export const removeTodoList = function () {
  localStorage.removeItem(todos)
}
