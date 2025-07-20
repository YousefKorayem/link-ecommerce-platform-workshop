import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartCourseCard.scss';

const CartCourseCard = ({ course }) => {
  const { removeFromCart } = useCart();

  const {
    id,
    title,
    author,
    image,
    price,
    discount,
    category,
    totalHours,
    lectures,
    level,
    rating = 5,
  } = course;

  const discountedPrice = price - (discount || 0);

  return (
    <div className="cart-course-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="cart-course-image" />
        {discount ? (
          <div className="discount-badge">-${discount}</div>
        ) : null}
      </div>

      <div className="cart-course-info">
        <h4 className="title">{title}</h4>
        <p className="author">By {author}</p>

        <div className="metadata">
          <span className="stars">★★★★★</span>
          <span className="divider">|</span>
          <span>{totalHours} Total Hours. {lectures} Lectures. {level}.</span>
        </div>

        <button className="remove" onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>

      <div className="price">${discountedPrice}</div>
    </div>
  );
};

export default CartCourseCard;
