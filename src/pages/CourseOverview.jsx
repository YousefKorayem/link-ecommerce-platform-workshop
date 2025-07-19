import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CourseCardDetailed from '../components/CourseCardDetailed/CourseCardDetailed';

const CourseOverview = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <CourseCardDetailed courseId={id} />
      <Footer />
    </>
  );
};

export default CourseOverview;
