import { connect } from 'react-redux'
import Cart from '../../components/Cart/index'
import {
  decreaseProduct,
  increaseProduct,
  delByIds
} from '../../redux/actions/cart'
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
      dispatch(decreaseProduct(id))
    },
    increase: (id) => {
      // 增加购物车某个商品
      dispatch(increaseProduct(id))
    },
    delByIds: (ids) => {
      // 批量删除购物车某些商品
      dispatch(delByIds(ids))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
