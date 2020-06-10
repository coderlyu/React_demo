import { LOGIN, LOGOUT, GET_USER } from '../types/index'

export const Login = (user) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOGIN,
        user
      })
    }, 1000)
  }
}
export const Logout = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOGOUT
      })
    }, 1000)
  }
}
export const getUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER
    })
  }
}
