import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
const { getProducts, buyProducts } = shop


export const getAllProducts = () => {
  return (dispatch) => {
    getProducts(products => {
      dispatch({
        type: types.RECEIVE_PRODUCTS,
        products
      })
    })
  }
}


export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch({
      type: types.ADD_TO_CART,
      productId
    })
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}