import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CourseCard from '../CourseCard/CourseCard';

import './Courses.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    // Fetch courses
    fetch('https://api.npoint.io/983f88db4d99fec8edd9')
      .then(res => res.json())
      .then(data => {
        setCourses(data.Courses);
        setFilteredCourses(data.Courses); // Default: show all
      })
      .catch(err => console.error('Failed to fetch courses:', err));

    // Fetch categories
    fetch('https://api.npoint.io/8378472d08789a9cb165')
      .then(res => res.json())
      .then(data => {
        const cleanedCategories = data.Categories.filter(
          (category) => category.name.toLowerCase() !== 'all'
        );
        setCategories(cleanedCategories);
      })
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  useEffect(() => {
    if (currentCategory === 'All') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => course.category === currentCategory);
      setFilteredCourses(filtered);
    }
  }, [currentCategory, courses]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="courses-section">
      <h2 className="courses-title">Top Courses</h2>

      <div className="category-button-wrapper">
        <button
          className={`category-button ${currentCategory === 'All' ? 'active' : ''}`}
          onClick={() => setCurrentCategory('All')}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            className={`category-button ${currentCategory === category.name ? 'active' : ''}`}
            key={index}
            onClick={() => setCurrentCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <Slider {...settings} className="courses-slider">
        {filteredCourses.map(course => (
          <div className="course-slide" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Courses;
