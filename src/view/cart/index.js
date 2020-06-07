import { connect } from 'react-redux'
import Cart from '../../components/Cart/index'
import { decreaseProduct, increaseProduct } from '../../redux/actions/shopping'
const mapStateToProps = (state) => {
  return {
    data: state.cart,
    total: state.cart.length
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    decrease: (id) => {
      // 减少购物车某个商品
      console.log('id', id)
      dispatch(decreaseProduct(id))
    },
    increase: (id) => {
      // 增加购物车某个商品
      dispatch(increaseProduct(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
