import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Banner.scss';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("https://api.npoint.io/2c9281eddfb0e4be229b");
        if (!response.ok) throw new Error("Failed to fetch banners.");
        const data = await response.json();
        setBanners(data.banners.sort((a, b) => a.order - b.order));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
  };

  if (error) return <div className="banner-carousel__error">Error: {error}</div>;
  if (loading || banners.length === 0) return <div className="banner-carousel__loading">Loading...</div>;

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <div
              className="banner-carousel__slide"
              style={{ '--accent-color': `#${banner.colorCode}` }}
            >
              <div className="banner-carousel__text">
                <div
                  className="banner-carousel__title"
                  dangerouslySetInnerHTML={{ __html: banner.title }}
                />
                <p className="banner-carousel__description">{banner.brief}</p>
                <button className="banner-carousel__button">Get Started</button>
              </div>

              <div className="banner-carousel__image-container">
                <div className="banner-carousel__circle-bg" />
                <img
                  className="banner-carousel__image"
                  src={banner.image}
                  alt="Banner Visual"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
