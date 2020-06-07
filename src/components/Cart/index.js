import React, { Component } from 'react'
import { Table, Button, Space, Pagination } from 'antd'
import PropTypes from 'prop-types'
const { Column } = Table

// const data = [
//   {
//     key: '1',
//     name: '芒果',
//     number: 10,
//     price: 120,
//     total: 1200
//   },
//   {
//     key: '2',
//     name: '荔枝',
//     number: 4,
//     price: 16,
//     total: 64
//   }
// ]

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
          pagination={false}
          rowKey={(record, index) => index}
        >
          <Column title="商品名" dataIndex="name" key="name" />
          <Column title="数量" dataIndex="number" key="number" />
          <Column
            title="单价"
            dataIndex="price"
            key="price"
            render={(text) => {
              return <>￥ {text}</>
            }}
          />
          <Column
            title="总价"
            dataIndex="total"
            key="total"
            render={(text, record) => {
              return <>￥ {record.number * record.price}</>
            }}
          />
          <Column
            title="Action"
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
                  <Button
                    onClick={() => increase(record.id)}
                  >
                    +
                  </Button>
                </Space>
              </div>
            )}
          />
        </Table>
        <Pagination
          defaultCurrent={this.props.page}
          total={this.props.total}
          defaultPageSize={this.props.number}
        />
      </>
    )
  }
}

export default Cart
