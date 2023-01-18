import React from "react";

const OrderList = (props) => {
  const { orders } = props;
  let quantity = 0;
  for (const meal of orders) {
    quantity = quantity + meal.quantity;
  }

  return (
    <div>
      <h2>Order List</h2>
      <h4>Items Ordered: {quantity}</h4>
    </div>
  );
};

export default OrderList;
