let status = 'ALL'
const visibilityFilter = (state = status, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      status = action.filter
      return action.filter
    default:
      status = 'ALL'
      return state
  }
}

export default visibilityFilter