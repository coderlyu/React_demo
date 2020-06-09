import { LOGIN, LOGOUT } from '../types/index'
import { getUserToken, setUserToken, removeUserToken } from '../../utils/_ls'
let User = {
  token: getUserToken() || '',
  avatar: '',
  name: '',
  userNumber: ''
}
const clearUser = () => {
  User = {
    token: '',
    avatar: '',
    name: '',
    userNumber: ''
  }
  return User
}
export default (state = User, action) => {
  switch (action.type) {
    case LOGIN:
      let user = state
      user = Object.assign({}, user, action.user)
      setUserToken(user)
      return user
    case LOGOUT:
      removeUserToken()
      return clearUser()
    default:
      return state
  }
}
