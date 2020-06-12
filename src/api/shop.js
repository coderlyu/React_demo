import _products from './products.json'
const TIMEOUT = 1000
const buyProducts = (payload, cb, timeout = TIMEOUT) =>
  setTimeout(() => cb(), timeout)
const getProducts = (cb, timeout = TIMEOUT) =>
  setTimeout(() => cb(_products), timeout)
export default {
  getProducts,
  buyProducts
}
