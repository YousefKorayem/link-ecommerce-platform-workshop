import {useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CheckoutPageBody from '../components/CheckoutPageBody/CheckoutPageBody';
import CheckoutConfirmed from '../components/CheckoutConfirmed/CheckoutConfirmed';

function Checkout() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <Header></Header>
      {isConfirmed ? (
        <CheckoutConfirmed />
      ) : (
        <CheckoutPageBody onComplete={() => setIsConfirmed(true)} />
      )}
      <Footer></Footer>
    </>
  )
}

export default Checkout
