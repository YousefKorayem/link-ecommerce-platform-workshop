import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Banner.scss';

import bannerbg from '../../assets/hero-background.svg';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.npoint.io/2c9281eddfb0e4be229b");
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setBanners(data.banners.sort((a, b) => a.order - b.order));
            } catch (err) {
                setError(err.message || 'An error has occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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

    if (loading || !banners.length) return <div className="banner">Loading...</div>;
    if (error) return <div className="banner error">Error: {error}</div>;

    return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {banners.map((banner) => (
            <div key={banner.id}>
                <div className="banner-slide" style={{ '--accent-color': `#${banner.colorCode}` }}>
  <div className="banner-text">
    <div className="banner-title" dangerouslySetInnerHTML={{ __html: banner.title }} />
    <p className="banner-description">{banner.brief}</p>
    <button className="banner-button">Get Started</button>
  </div>
  <div className="image-container">
    <div className="circle-bg" />
    <img className="banner-image" src={banner.image} alt="Banner" />
    {/* <img src={bannerbg}></img> */}
  </div>
</div>
            </div>
            ))}
      </Slider>
    </div>
  );
}

export default Banner;