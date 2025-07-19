import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PaymentDetailsForm from '../PaymentDetailsForm/PaymentDetailsForm';
import { useCart } from '../../context/CartContext';
import './CheckoutPageBody.scss';

const CheckoutPageBody = ( {onComplete} ) => {

  const { cartItems } = useCart();

  return (
    <div className="checkout-page-body">
      <div className="checkout-left">
        <PaymentDetailsForm />
      </div>
      <div className="checkout-right">
        <OrderSummary courses={cartItems} isCheckoutPage={true} onCompletePayment={onComplete}/>
      </div>
    </div>
  );
};

export default CheckoutPageBody;
