import React, { useContext } from 'react';
import { useCart } from '../../context/CartContext';
import CartCourseCard from '../CartCourseCard/CartCourseCard';
import OrderSummary from '../OrderSummary/OrderSummary';

import './CartPageBody.scss';

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <>
      <section className="cart-page">
        <div className="cart-content">
          <div className="cart-items">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartCourseCard key={item.id} course={item} />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <OrderSummary courses={cartItems} />
        </div>
      </section>
    </>
  );
};

export default CartPage;
