import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data=[{
  id:1,
  shop:"昌邑菜",
  picture:"https://p1.meituan.net/210.0/wmproductdwm/1edba22e8c933ee751e1279909273446252034.jpg",
  product:"百香果",
  price:19.9,
  ifCommented:true,
},
{
  id:2,
  shop:"昌邑菜",
  picture:"https://p1.meituan.net/210.0/wmproductdwm/1edba22e8c933ee751e1279909273446252034.jpg",
  product:"百香果",
  price:29.9,
  ifCommented:true,
},{
  id:3,
  shop:"昌邑菜",
  picture:"https://p1.meituan.net/210.0/wmproductdwm/1edba22e8c933ee751e1279909273446252034.jpg",
  product:"百香果",
  price:39.9,
  ifCommented:true,
},{
  id:4,
  shop:"昌邑菜",
  picture:"https://p1.meituan.net/210.0/wmproductdwm/1edba22e8c933ee751e1279909273446252034.jpg",
  product:"百香果",
  price:49.9,
  ifCommented:true,
}
]

class OrderList extends Component {
  render() {
    return (
      <div className="OrderList">
      {
        data.map(item=>{
          return <OrderItem key={item.id} data={item}/>
        })
      }
        
      </div>
    );
  }
}

export default OrderList;