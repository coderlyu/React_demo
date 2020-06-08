import React, { Component } from 'react'
import { Table, Button, Space } from 'antd'
import PropTypes from 'prop-types'
const { Column } = Table

class Cart extends Component {
  static propType = {
    data: PropTypes.array,
    page: PropTypes.number,
    total: PropTypes.number,
    number: PropTypes.number
  }
  static defaultProps = {
    page: 1,
    total: 100,
    number: 10
  }
  render() {
    console.log(this.props)
    const { decrease, increase } = this.props
    return (
      <>
        <Table
          dataSource={this.props.data}
          pagination={{
            defaultCurrent: this.props.page,
            total: this.props.total,
            defaultPageSize: this.props.number
          }}
          rowKey={(record, index) => index}
        >
          <Column title="商品名" dataIndex="name" key="name" />
          <Column title="数量" dataIndex="number" key="number" />
          <Column
            title="单价"
            dataIndex="price"
            key="price"
            render={(text) => {
              return <>￥ {text.toFixed(2)}</>
            }}
          />
          <Column
            title="总价"
            dataIndex="total"
            key="total"
            render={(text, record) => {
              return <>￥ {(record.number * record.price).toFixed(2)}</>
            }}
          />
          <Column
            title="操作"
            key="action"
            width="200px"
            render={(text, record, index) => (
              <div style={{ display: 'flex' }}>
                <Space>
                  <Button
                    disabled={record.number <= 0}
                    onClick={() => decrease(record.id)}
                  >
                    -
                  </Button>
                  <Button onClick={() => increase(record.id)}>+</Button>
                </Space>
              </div>
            )}
          />
        </Table>
      </>
    )
  }
}

export default Cart
