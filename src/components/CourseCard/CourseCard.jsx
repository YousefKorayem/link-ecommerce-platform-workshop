import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import './CourseCard.scss';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  const {
    image,
    discount,
    price,
    category,
    title,
    author,
    ratingCount,
    hours,
    level,
    lectures,
  } = course;

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="image-wrapper">
        <img src={image} alt={title} className="course-image" />
        {discount && <div className="discount-badge">-${discount}</div>}
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
      </div>

      <div className="price-category">
        <span className="price">${price}</span>
        <span className="category">{category}</span>
      </div>

      <h3 className="course-title">{title}</h3>
      <p className="course-author">{author}</p>

      <div className="rating-row">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} className="star" />
        ))}
        <span className="rating-count">({ratingCount} ratings)</span>
      </div>

      <p className="course-meta">
        {hours} Total Hours. {lectures} Lectures. {level}
      </p>
    </div>
  );
};

export default CourseCard;
