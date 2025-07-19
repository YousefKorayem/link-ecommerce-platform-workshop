import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartPageBody from '../components/CartPageBody/CartPageBody';
import { useNavigate } from 'react-router-dom';

function Cart() {

  return (
    <>
      <Header></Header>
      <CartPageBody></CartPageBody>
      <Footer></Footer>
    </>
  )
}

export default Cart
