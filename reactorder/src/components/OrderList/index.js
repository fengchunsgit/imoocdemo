import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data={
  id:1,
  shop:"昌邑菜",
  picture:"https://p1.meituan.net/210.0/wmproductdwm/1edba22e8c933ee751e1279909273446252034.jpg",
  product:"百香果",
  price:19.9,
  ifCommented:true,
}

class OrderList extends Component {
  render() {
    return (
      <div className="OrderList">
        <OrderItem data={data}/>
      </div>
    );
  }
}

export default OrderList;