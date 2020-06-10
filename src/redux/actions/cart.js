import shop from '../../api/shop'
import * as types from '../types/index'
const { getProducts } = shop

export const getAllProducts = () => {
  return (dispatch) => {
    getProducts((products) => {
      dispatch({
        type: types.RECEIVE_PRODUCTS,
        products
      })
    })
  }
}

export const addToCart = (product) => {
  return (dispatch, getState) => {
    console.log('shopping->dispatch', getState())
    dispatch({
      type: types.ADD_TO_CART,
      product: product
    })
  }
}

export const getAllCart = () => {
  return (dispatch) => {
    dispatch({
      type: types.ADD_TO_CART
    })
  }
}
export const decreaseProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.DECREASE_PRODUCT,
      id
    })
  }
}
export const increaseProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.INCREASE_PRODUCT,
      id
    })
  }
}
export const delByIds = (ids) => {
  return (dispatch) => {
    dispatch({
      type: types.DEL_BY_IDS,
      ids
    })
  }
}
