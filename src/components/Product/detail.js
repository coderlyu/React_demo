import React, { Component } from 'react'
import { Spin, Card, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import data from '../../api/products.json'
import '../../assets/css/p_detail.css'
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
  routeBack = () => {
    this.props.history.go(-1)
  }
  render() {
    let { product } = this.state
    return (
      <Spin spinning={this.loading}>
        <Card>
          <article className="detail-wrapper">
            <div className="product-detail">
              <img src={product.img} alt={product.name} title={product.name} />
            </div>
            <section className="detail-right">
              <h3
                style={{
                  textAlign: 'center',
                  fontSize: '25px',
                  fontWeight: '700'
                }}
              >
                {product.name}
              </h3>
              <section>
                <p>{product.intro}</p>
                <section style={{ marginLeft: '30px', fontSize: '20px' }}>
                  <span className="price">{product.price}</span>
                  <s style={{ marginLeft: '10px' }}>{product.oldPrice}</s>
                </section>
              </section>
              <div style={{ textAlign: 'end', marginTop: '40px' }}>
                <Button type="danger" onClick={this.routeBack}>
                  ADD TO CART
                </Button>
              </div>
            </section>
          </article>
        </Card>
      </Spin>
    )
  }
}

export default withRouter(productDetail)
