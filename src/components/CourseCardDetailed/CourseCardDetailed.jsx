import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CourseCardDetailed.scss';

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
    <div className="course-card-detailed">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>By {course.author}</p>
      <p>Category: {course.category}</p>
      <p>Price: ${course.price}</p>
      <p>{course.hours} hours • {course.lectures} lectures • {course.level}</p>
      <p>{course.description}</p>
      <div className="buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
    </div>
  );
};

export default CourseCardDetailed;
