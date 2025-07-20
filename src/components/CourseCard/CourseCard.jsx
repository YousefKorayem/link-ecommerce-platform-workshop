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
      <div className="course-card__image-wrapper">
        <img src={image} alt={title} className="course-card__image" />
        <div className="course-card__image-overlay"></div>

        {discount && <div className="course-card__discount">-${discount}</div>}
        <div className="course-card__cart-icon">
          <FaShoppingCart />
        </div>
      </div>

      <div className="course-card__info-row">
        <span className="course-card__price">${price}</span>
        <span className="course-card__category">{category}</span>
      </div>

      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__author">{author}</p>

      <div className="course-card__rating">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} className="star" />
        ))}
        <span className="course-card__rating-count">({ratingCount} ratings)</span>
      </div>

      <p className="course-card__meta">
        {hours} Total Hours. {lectures} Lectures. {level}
      </p>
    </div>
  );
};

export default CourseCard;
