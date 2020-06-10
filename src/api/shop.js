/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100
const buyProducts = (payload, cb, timeout) =>
  setTimeout(() => cb(), timeout || TIMEOUT)
const getProducts = (cb, timeout) =>
  setTimeout(() => cb(_products), timeout || TIMEOUT)
export default {
  getProducts,
  buyProducts
}
