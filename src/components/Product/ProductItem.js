import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Space, Card, Col, Spin } from 'antd'
const { Meta } = Card
class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      loading: true
    }
  }
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      intro: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    addCart: PropTypes.func.isRequired
  }
  handleClick = () => {
    this.props.addCart({
      id: this.props.product.id,
      number: this.state.num
    })
    this.setState({
      num: 0
    })
  }
  handleChange = (e) => {
    let N = e.target.value * 1
    this.setState({
      num: N
    })
  }
  handleImageLoaded = () => {
    // 图片加载成功或加载失败都要将 loading动画暂停
    this.setState({
      loading: false
    })
  }
  render() {
    const { product } = this.props
    return (
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={6}
        style={{ display: 'flex', justifyContent: "center" }}
      >
        <Spin spinning={this.state.loading}>
          <Card
            className="card-product"
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                style={{ width: '300px', height: '400px' }}
                alt={product.name}
                src={product.img}
                onLoad={this.handleImageLoaded}
                onError={this.handleImageLoaded}
              />
            }
          >
            <span className="product-hot">本周热销</span>
            <Meta title={product.name} description={product.intro} />
            <div className="product-item">
              <span>
                <i className="price">￥{product.price}</i>
                <s>
                  <small>￥{product.oldPrice}</small>
                </s>
              </span>
              <span>
                库存：<small>{product.stock}</small>
              </span>
            </div>
            <Space style={{ marginTop: '10px' }}>
              <Input
                disabled={product.stock === 0}
                style={{ display: 'block', width: '180px' }}
                type="number"
                value={this.state.num}
                min="0"
                max={product.stock}
                pattern="/^[0-9]+$/"
                onChange={this.handleChange}
              />
              <Button
                type="primary"
                disabled={product.stock === 0 || this.state.num === 0}
                onClick={this.handleClick}
              >
                ADD
              </Button>
            </Space>
          </Card>
        </Spin>
      </Col>
    )
  }
}

export default ProductItem
