import React, { Component } from 'react';
import { Table, Input, Button } from 'antd';
const columns = [
  {
    title: '商品名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '数量',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    render: (text) => (
      <> ￥{text} </>
    )
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total',
    render: (text) => (
      <> ￥{text} </>
    )
  },
  {
    title: '操作',
    key: 'action',
    width: '200px',
    render: (text, record, index) => (
      <div style={{ display: 'flex' }}>
        <Button onClick={() => this.decrease(index)}>-</Button>
        <Input value={record.number} />
        <Button onClick={() => this.increase(index)}>+</Button>
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '芒果',
    number: 10,
    price: 120,
    total: 1200,
  },

];
class Cart extends Component {
  decrease = (index) => {
    console.log('减少：' + index)
  }
  increase = (index) => {
    console.log('增加：' + index)
  }
  render() {
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
}

export default Cart;