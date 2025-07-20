import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { FaGlobe, FaStar } from 'react-icons/fa';
import './CourseCardDetailed.scss';
import { FaFacebookF, FaGithub, FaGoogle, FaXTwitter, FaMicrosoft } from 'react-icons/fa6';


const CourseCardDetailed = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const { addToCart } = useCart();
  const handleAddToCart = () => addToCart(course);

  useEffect(() => {
    fetch('https://api.npoint.io/983f88db4d99fec8edd9')
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.Courses.find((c) => c.id === courseId);
        setCourse(foundCourse);
      });
  }, [courseId]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-detailed-container">
      <div className="left-content">
        <p className="breadcrumb">Home &gt; {course.title}</p>
        <h1 className="course-title">{course.title}</h1>
        <p className="description">{course.description}</p>
        <div className="course-meta">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>
          <span className="separator">|</span>
          <span>{course.hours} Total Hours • {course.lectures} Lectures • {course.level}</span>
        </div>
        <p className="author">Created by <strong>{course.author}</strong></p>
        <p className="languages">
          <FaGlobe className="globe-icon" />
        </p>
      </div>

      <div className="right-card">
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="price-section">
          <span className="final-price">${course.price}</span>
          {course.originalPrice && course.originalPrice > course.price && (
            <>
              <span className="original-price">${course.originalPrice}</span>
              <span className="discount">-${(course.originalPrice - course.price).toFixed(2)}</span>
            </>
          )}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buy-now">Buy Now</button>
        <hr className="divider" />
        <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaMicrosoft /></a>
          </div>
      </div>
    </div>
  );
};

export default CourseCardDetailed;
