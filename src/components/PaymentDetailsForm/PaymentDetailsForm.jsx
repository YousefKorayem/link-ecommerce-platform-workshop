import React from 'react';
import './PaymentDetailsForm.scss';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const PaymentDetailsForm = () => {
  return (
    <div className="payment-details-form">
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" />
        </div>

        <div className="form-group">
          <label htmlFor="state">State / Union Territory</label>
          <input type="text" id="state" name="state" />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <div className="radio-option">
            <input type="radio" id="card" name="paymentMethod" checked readOnly />
            <label htmlFor="card">
              Credit / Debit Card
              <span className="card-icons">
                <FaCcVisa />
                <FaCcMastercard />
              </span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input type="text" id="nameOnCard" name="nameOnCard" />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC / CVV</label>
            <input type="text" id="cvc" name="cvc" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
