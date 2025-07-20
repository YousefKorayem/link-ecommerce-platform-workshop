import React, { useState } from 'react';
import './PaymentDetailsForm.scss';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const PaymentDetailsForm = () => {
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { setCartPaid } = useCart();

  const validate = () => {
    const newErrors = {};

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.country)) {
      newErrors.country = 'Country must contain only letters.';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.state)) {
      newErrors.state = 'State must contain only letters.';
    }

    if (!formData.nameOnCard.trim()) {
      newErrors.nameOnCard = 'Name on card is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nameOnCard)) {
      newErrors.nameOnCard = 'Name must contain only letters.';
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required.';
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!formData.expiry.trim()) {
      newErrors.expiry = 'Expiry date is required.';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = 'Use MM/YY format.';
    } else {
      const [month, year] = formData.expiry.split('/');
      const expDate = new Date(`20${year}`, month);
      const now = new Date();
      if (expDate < now) {
        newErrors.expiry = 'Expiry date must be in the future.';
      }
    }

    if (!formData.cvc.trim()) {
      newErrors.cvc = 'CVC is required.';
    } else if (!/^\d{3}$/.test(formData.cvc)) {
      newErrors.cvc = 'CVC must be 3 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setCartPaid(true);
      setSubmitted(true);
    }
  };

  return (
    <div className="payment-details-form-wrapper">
      <div className="header-row">
        <h1 className="page-title">Checkout Page</h1>
        <p className="breadcrumb">Details &gt; Shopping Cart &gt; Checkout</p>
      </div>

      {submitted ? (
        <div className="success-message">
          <h2>Payment Successful</h2>
          <p>Thank you for your purchase. Here are your details:</p>
          <ul>
            <li><strong>Country:</strong> {formData.country}</li>
            <li><strong>State:</strong> {formData.state}</li>
            <li><strong>Name on Card:</strong> {formData.nameOnCard}</li>
            <li><strong>Card Number:</strong> **** **** **** {formData.cardNumber.slice(-4)}</li>
            <li><strong>Expiry:</strong> {formData.expiry}</li>
            <li><strong>CVC:</strong> ***</li>
          </ul>
        </div>
      ) : (
        <div className="payment-details-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">
                  Country <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter Country"
                />
                {errors.country && <p className="error">{errors.country}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="state">
                  State / Union Territory <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                />
                {errors.state && <p className="error">{errors.state}</p>}
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
                value={formData.nameOnCard}
                onChange={handleChange}
                placeholder="Name on Card"
              />
              {errors.nameOnCard && <p className="error">{errors.nameOnCard}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">
                Card Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
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
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="Enter Expiry Date (MM/YY)"
                />
                {errors.expiry && <p className="error">{errors.expiry}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="cvc">
                  CVC / CVV <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="Enter CVC/CVV"
                />
                {errors.cvc && <p className="error">{errors.cvc}</p>}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit Payment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentDetailsForm;
