import React from 'react';
import './OrderSummary.scss';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const OrderSummary = ({ courses, isCheckoutPage, onCompletePayment }) => {
  const { clearCart } = useCart();

  const totalPrice = courses.reduce((sum, c) => sum + c.price, 0);
  const totalDiscount = courses.reduce((sum, c) => sum + (c.discount || 0), 0);
  const tax = Math.round((totalPrice - totalDiscount) * 0.1);
  const finalTotal = totalPrice - totalDiscount + tax;

  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    onCompletePayment();
  };

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="order-summary">
      <h3>Order Details</h3>

      <div className="summary-line">
        <span>Original Price:</span>
        <span>${totalPrice}</span>
      </div>

      <div className="summary-line discount">
        <span>Discount:</span>
        <span>-${totalDiscount}</span>
      </div>

      <div className="summary-line tax">
        <span>Tax (10%):</span>
        <span>${tax}</span>
      </div>

      <hr />

      <div className="summary-line total">
        <span>Total:</span>
        <span>${finalTotal}</span>
      </div>

      <button
        className="checkout-button"
        onClick={isCheckoutPage ? handleCheckout : handleClick}
      >
        {isCheckoutPage ? 'Complete Payment' : 'Proceed to Checkout'}
      </button>
    </div>
  );
};

export default OrderSummary;
