import { connect } from 'react-redux'
import Product from '../../components/Product'
import { addToCart } from '../../redux/actions/cart'

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(Product)
