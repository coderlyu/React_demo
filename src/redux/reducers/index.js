import { combineReducers } from 'redux'
import cart from './cart'
import app from './app'
import user from './user'
import game from './game'
import todolist from './todolist'

export default combineReducers({
  cart,
  game,
  app,
  user,
  todolist
})
