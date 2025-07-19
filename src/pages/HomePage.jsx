import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';

function HomePage() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Gallery></Gallery>
      <Courses></Courses>
      <Footer></Footer>
    </>
  )
}

export default HomePage
