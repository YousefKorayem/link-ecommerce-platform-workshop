import React from 'react';
import './PaymentDetailsForm.scss';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const PaymentDetailsForm = () => {
  return (
    <div className="payment-details-form-wrapper">
      <div className="header-row">
        <h1 className="page-title">Checkout Page</h1>
        <p className="breadcrumb">Details &gt; Shopping Cart &gt; Checkout</p>
      </div>

      <div className="payment-details-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">
                Country <span className="required">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter Country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">
                State / Union Territory <span className="required">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter State"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Payment Method <span className="required">*</span>
            </label>
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
            <label htmlFor="nameOnCard">
              Name on Card <span className="required">*</span>
            </label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              placeholder="Name on Card"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">
              Card Number <span className="required">*</span>
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry">
                Expiry Date <span className="required">*</span>
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="Enter Expiry Date (MM/YY)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvc">
                CVC / CVV <span className="required">*</span>
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="Enter CVC/CVV"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetailsForm;
