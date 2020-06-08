import React, { Component } from 'react'
import { Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import data from '../../api/products.json'
class productDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id * 1,
      product: {
        id: '',
        name: '',
        price: '',
        stock: '',
        oldPrice: '',
        img: '',
        intro: ''
      }
    }
  }
  mountd = false
  loading = true
  getDetail = (id) => {
    this.mountd = true
    this.loading = true
    setTimeout(() => {
      if (this.mountd) {
        this.loading = false
        this.mountd = false
        this.setState({
          product: data.find((item) => {
            return item.id === id
          })
        })
      }
    }, 1000)
  }
  componentDidMount() {
    this.getDetail(this.state.id)
  }
  componentWillUnmount() {
    if (this.mountd) {
      this.mountd = false
    }
  }
  render() {
    let { product } = this.state
    console.log(product)
    return (
      <Spin spinning={this.loading}>
        <h3>{product.name}</h3>
        <p>{product.intro}</p>
        <p>{product.id}</p>
        <p>{product.img}</p>
        <p>{product.price}</p>
        <p>{product.oldPrice}</p>
      </Spin>
    )
  }
}

export default withRouter(productDetail)
