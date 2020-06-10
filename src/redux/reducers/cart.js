import {
  ADD_TO_CART,
  GET_ALL_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  DEL_BY_IDS
} from '../types/index'
import { getCart, setCart } from '../../utils/_ls'
const initState = getCart() || []
const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 添加购物车
      let { product } = action
      let isFirst = state.some((item) => {
        return item.id === product.id
      })
      let tmp = state
      if (!isFirst) {
        tmp.push(product)
      } else {
        tmp.map((item) => {
          if (item.id === product.id) {
            return (item.number = item.number + product.number)
          }
          return item
        })
      }
      setCart(tmp)
      return tmp
    case GET_ALL_CART:
      // 获取所有购物车里的东西
      return state
    case INCREASE_PRODUCT:
      // 增加购物车里的某个商品
      let id = action.id
      let tmps = state
      let isExist = tmps.some((item) => {
        return item.id === id
      })
      if (isExist) {
        tmps = tmps.map((item) => {
          if (id === item.id) {
            item.number = item.number + 1
            return item
          }
          return item
        })
      }
      setCart(tmps)
      return tmps

    case DECREASE_PRODUCT:
      let id2 = action.id
      let tmps2 = state
      let isExist2 = tmps2.some((item) => {
        return item.id === id2
      })
      if (isExist2) {
        tmps2 = tmps2.map((item) => {
          if (id2 === item.id) {
            item.number = item.number - 1
            return item
          }
          return item
        })
      }
      // 减少购物车里的某个商品
      setCart(tmps2)
      return tmps2
    case DEL_BY_IDS:
      let { ids } = action
      let delData = state
      delData = delData.filter((item) => {
        return !ids.some((e) => e === item.id)
      })
      setCart(delData)
      return delData
    default:
      return state
  }
}

export default cart
