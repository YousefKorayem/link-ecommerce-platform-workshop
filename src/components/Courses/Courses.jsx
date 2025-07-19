import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CourseCard from '../CourseCard/CourseCard';

import './Courses.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
  const [courseChunks, setCourseChunks] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/983f88db4d99fec8edd9') // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => {
        const courses = data.Courses;
        const chunks = [];
        for (let i = 0; i < courses.length; i += 3) {
          chunks.push(courses.slice(i, i + 3));
        }
        setCourseChunks(chunks);
      })
      .catch((err) => console.error('Failed to fetch courses:', err));
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="courses-section">
      <h2 className="courses-title">Top Courses</h2>
      <Slider {...settings} className="courses-slider">
        {courseChunks.map((chunk, index) => (
          <div className="course-slide" key={index}>
            {chunk.map((course) => (
              <CourseCard course={course} />
            ))}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Courses;
