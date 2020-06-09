import { LOGIN, LOGOUT } from '../types/index'
import { getUserToken, setUserToken, removeUserToken } from '../../utils/_ls'
let User = {
  token: getUserToken() || '',
  avatar: '',
  username: '',
  userNumber: ''
}
const clearUser = () => {
  User = {
    token: '',
    avatar: '',
    username: '',
    userNumber: ''
  }
  return User
}
export default (state = User, action) => {
  switch (action.type) {
    case LOGIN:
      let user = state
      let token = action.user.username + Date.now()
      user = Object.assign({}, user, action.user, {
        token
      })
      setUserToken(token)
      return user
    case LOGOUT:
      removeUserToken()
      return clearUser()
    default:
      return state
  }
}
