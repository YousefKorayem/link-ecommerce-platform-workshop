import React from 'react';
import './CartCourseCard.scss';

const CartCourseCard = ({ course }) => {
  const { title, author, image, price, discount, category } = course;

  const discountedPrice = price - (discount || 0);

  return (
    <div className="cart-course-card">
      <img src={image} alt={title} className="cart-course-image" />
      <div className="cart-course-info">
        <h4 className="cart-course-title">{title}</h4>
        <p className="cart-course-author">{author}</p>
        <p className="cart-course-category">{category}</p>
        <div className="cart-course-price">
          {discount ? (
            <>
              <span className="original-price">${price}</span>
              <span className="discounted-price">${discountedPrice}</span>
            </>
          ) : (
            <span className="discounted-price">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCourseCard;
