import React from 'react';
import './OrderSummary.scss';

const OrderSummary = ({ courses }) => {
  const totalPrice = courses.reduce((sum, c) => sum + c.price, 0);
  const totalDiscount = courses.reduce((sum, c) => sum + (c.discount || 0), 0);
  const tax = Math.round((totalPrice - totalDiscount) * 0.1);
  const finalTotal = totalPrice - totalDiscount + tax;

  return (
    <div className="order-summary">
      <h3>Order Details</h3>
      <p>Original Price: ${totalPrice}</p>
      <p>Discount: -${totalDiscount}</p>
      <p>Tax (10%): ${tax}</p>
      <hr />
      <p className="net-total">Total: ${finalTotal}</p>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default OrderSummary;
