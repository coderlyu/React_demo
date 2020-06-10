import React, { Component } from 'react'
import { Row, message, Spin } from 'antd'
import productList from '../../api/products.json'
import ProductItem from './ProductItem'
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      timer: null
    }
  }
  addCart = (product) => {
    const { products } = this.state
    let tmp = products.filter((item) => {
      return item.id === product.id
    })[0]
    this.setState({
      products: products.map((item) => {
        if (product.id === item.id) {
          if (item.stock >= product.number) {
            item.stock = item.stock - product.number
          }
          return item
        }
        return item
      })
    })
    let it = {
      id: tmp.id,
      number: product.number,
      name: tmp.name,
      price: tmp.price,
      oldPrice: tmp.oldPrice
    }
    message.info('添加购物车成功!')
    this.props.addToCart(it)
  }
  mounted = false
  componentDidMount() {
    this.mounted = true
    let timer = setTimeout(() => {
      if (this.mounted) {
        this.mounted = false
        this.setState({
          products: productList
        })
      }
    }, 500)
    this.setState({
      timer: timer
    })
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer)
    this.mounted && (this.mounted = false)
  }
  render() {
    return (
      <Spin spinning={this.mounted}>
        <Row gutter={16}>
          {this.state.products.map((product) => {
            return (
              <ProductItem
                product={product}
                addCart={this.addCart}
                key={product.id}
              />
            )
          })}
        </Row>
      </Spin>
    )
  }
}

export default Product
