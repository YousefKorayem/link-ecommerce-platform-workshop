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
    <section className="gallery">
      <div className="gallery__header">
        <h2 className="gallery__title"><span className="gallery__title--emph">Check</span> our latest Media Gallery</h2>
        <p className="gallery__subtitle">
          Every picture holds a moment, every moment holds a story
        </p>
      </div>

      <div className="gallery__slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="gallery__slide">
              <div className="gallery__image-wrapper">
                <img
                  src={img.image || img}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery__image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="gallery__button-wrapper">
        <button className="gallery__button">View all photos</button>
      </div>
    </section>
  );
};

export default Gallery;
