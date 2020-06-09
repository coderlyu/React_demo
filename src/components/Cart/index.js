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
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    delLoading: false
  }
  toBuy = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.props.delByIds(this.state.selectedRowKeys)
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }
  batchDel = () => {
    this.setState({ delLoading: true })
    setTimeout(() => {
      this.props.delByIds(this.state.selectedRowKeys)
      this.setState({
        selectedRowKeys: [],
        delLoading: false
      })
    }, 1000)
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  render() {
    const { decrease, increase } = this.props
    const { loading, selectedRowKeys, delLoading } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="danger"
              onClick={this.batchDel}
              disabled={!hasSelected || loading}
              loading={delLoading}
            >
              批量删除
            </Button>
          </div>
          <div style={{ marginRight: 16 }}>
            <span style={{ marginRight: 8 }}>
              {hasSelected ? `选中 ${selectedRowKeys.length} 项` : ''}
            </span>
            <Button
              type="primary"
              onClick={this.toBuy}
              disabled={!hasSelected || delLoading}
              loading={loading}
            >
              确认购买
            </Button>
          </div>
        </div>
        <Table
          dataSource={this.props.data}
          pagination={{
            defaultCurrent: this.props.page,
            total: this.props.total,
            defaultPageSize: this.props.number
          }}
          rowSelection={rowSelection}
          rowKey={(record, index) => record.id}
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
                    disabled={record.number <= 1}
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
