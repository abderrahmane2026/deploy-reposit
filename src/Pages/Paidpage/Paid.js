import React, { useState } from 'react';
import './Paid.css';


const PaidPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Payment successful!');
    } else {
      alert('Please enter valid information.');
    }
  };

  const validateForm = () => {
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^\d{2}\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    return cardNumberPattern.test(cardNumber) &&
           expiryDatePattern.test(expiryDate) &&
           cvvPattern.test(cvv);
  };

  return (
    <div className='PaidPage'>

    
    <div className="container">
      <h1>Payment<span>Page</span> </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input 
            type="text" 
            id="card-number" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input 
            type="text" 
            id="expiry-date" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
    </div>
  );
};

export default PaidPage;
