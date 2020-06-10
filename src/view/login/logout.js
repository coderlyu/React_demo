import { Component } from 'react'
import { connect } from 'react-redux'
import { Logout } from '../../redux/actions/user'
import { withRouter } from 'react-router-dom'
class logout extends Component {
  componentDidMount() {
    this.props.logout()
    this.props.history.push('/login')
  }
  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(Logout())
    }
  }
}
export default connect(null, mapDispatchToProps)(withRouter(logout))
