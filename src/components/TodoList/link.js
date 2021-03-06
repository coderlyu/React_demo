import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions/todolist'
class Link extends React.Component {
  render() {
    // debugger
    return (
      <Radio.Button value={this.props.tagVal} onClick={this.props.onClick}>
        {this.props.children}
      </Radio.Button>
    )
  }
}

Link.propTypes = {
  // active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
export default connect(null, mapDispatchToProps)(Link)
