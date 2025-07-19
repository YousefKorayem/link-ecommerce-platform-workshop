import React from 'react';
import './CheckoutConfirmed.scss';
import { CheckCircle } from 'lucide-react';

const CheckoutConfirmed = () => {
  return (
    <div className="checkout-confirmed">
      <div className="icon-wrapper">
        <CheckCircle className="check-icon" />
      </div>
      <h2>Order Complete</h2>
      <p>You will receive a confirmation email soon</p>
    </div>
  );
};

export default CheckoutConfirmed;
