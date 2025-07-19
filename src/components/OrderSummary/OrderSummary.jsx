import React from 'react';
import './OrderSummary.scss';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ courses, isCheckoutPage, onCompletePayment }) => {
  const totalPrice = courses.reduce((sum, c) => sum + c.price, 0);
  const totalDiscount = courses.reduce((sum, c) => sum + (c.discount || 0), 0);
  const tax = Math.round((totalPrice - totalDiscount) * 0.1);
  const finalTotal = totalPrice - totalDiscount + tax;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  }

  return (
    <div className="order-summary">
      <h3>Order Details</h3>
      <p>Original Price: ${totalPrice}</p>
      <p>Discount: -${totalDiscount}</p>
      <p>Tax (10%): ${tax}</p>
      <hr />
      <p className="net-total">Total: ${finalTotal}</p>
      <button className="checkout-button" onClick={isCheckoutPage ? onCompletePayment : handleClick}>
        {isCheckoutPage ? 'Complete Payment' : 'Proceed to Checkout'}
      </button>
    </div>
  );
};

export default OrderSummary;
