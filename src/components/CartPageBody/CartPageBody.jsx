import React from 'react';
import './CartPageBody.scss';
import CartCourseCard from '../CartCourseCard/CartCourseCard';
import OrderSummaryCard from '../OrderSummary/OrderSummary';
import { useCart } from '../../context/CartContext';

const CartPageBody = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      {/* Left Side: Cart Info */}
      <div className="cart-left">
        <div className="breadcrumb">Categories &gt; Details &gt; <strong>Shopping Cart</strong></div>
        <h1 className="cart-title">Shopping Cart</h1>
        <p className="cart-count">{cartItems.length} Course(s) in cart</p>

        <div className="cart-course-list">
          {cartItems.map(course => (
            <CartCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Right Side: Order Summary */}
      <div className="cart-right">
        <OrderSummaryCard courses={cartItems} isCheckoutPage={false} />
      </div>
    </div>
  );
};

export default CartPageBody;
