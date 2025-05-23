import React from 'react';
import './PaymentPage.scss';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="payment-container">
      <div className="payment-header">
        <button className="payment-back" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <div className="payment-title">PAYMENT</div>
        <div className="payment-breadcrumb">
          <span>Home</span>
          <span className="dot">•</span>
          <span className="active">Payment</span>
        </div>
      </div>
      <div className="payment-content">
        <div className="payment-box">
          <div className="payment-business">
            <span className="business-name">Business name</span>
            <div className="payment-amount-group">
              <span className="payment-amount">25.00 NOK</span>
              <span className="payment-vat">inc. VAT</span>
            </div>
          </div>
          <div className="payment-testmode">Checkout is running in test mode. Click here for test data.</div>
          <div className="payment-method">
            <span className="method-dot active"></span>
            <span className="method-label">Credit Card</span>
            <span className="method-desc">- credit or debit</span>
            <span className="payment-visa"></span>
            <span className="payment-mastercard"></span>
          </div>
          <div className="payment-form">
            <input className="payment-input" placeholder="Card number" />
            <div className="payment-form-row">
              <input className="payment-input" placeholder="MM/YY" />
              <input className="payment-input" placeholder="CVV" />
            </div>
            <button className="payment-pay-btn">Pay NOK 25.00</button>
          </div>
          <div className="payment-cancel-row">
            <button className="payment-cancel-btn" onClick={() => navigate(-1)}>Cancel payment</button>
          </div>
          <div className="payment-powered">Dinero <span className="checkout">CHECKOUT</span></div>
        </div>
      </div>
    </div>
  );
}

export default Payment; 