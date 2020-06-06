import * as types from '../types/index'
const initState = {
  collapsed: false
}
const toggleCollapse = (state = initState, action) => {
  switch (action.type) {
    case types.TOGGLE_COLLAPSE:
      return {
        collapsed: !state.collapsed
      }
    default:
      return state
  }
}
export default toggleCollapse