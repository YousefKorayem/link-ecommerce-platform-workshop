import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/8494c045d50509ba0d5a')
      .then((res) => res.json())
      .then((data) => setImages(data.Slider || []))
      .catch((err) => console.error('Failed to load gallery images:', err));
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery">
      <div className="gallery__text">
        <h2 className="gallery__title">
          <span className="gallery__title--emph">Check</span> our latest Media Gallery
        </h2>
        <p className="gallery__subtitle">Every picture holds a moment, every moment holds a story</p>
        <div className="gallery__button-wrapper desktop-only">
          <button className="gallery__button">View all Photos</button>
        </div>

      </div>

      <div className="gallery__slider">
        <Slider dots={true} arrows={false}>
          {images.map((item, index) => (
            <div key={index} className="gallery__slide">
              <div className="gallery__image-wrapper">
                <img src={item.image} alt="" className="gallery__image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="gallery__button-wrapper mobile-only">
          <button className="gallery__button">View all Photos</button>
      </div>
    </div>
  );
};

export default Gallery;
