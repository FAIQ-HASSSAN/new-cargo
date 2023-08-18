// TransactionPage.js
import React from 'react';
import './css/TransactionPage.css'; // Import your custom CSS file for styling

const Transactionpage = () => {
  return (
    <div className="transaction-page">
      <h2>Transaction Details</h2>
      <form>
        <div className="form-group">
          <label>Card Number:</label>
          <input type="text" placeholder="Enter your card number" />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input type="text" placeholder="CVV" />
        </div>
        <div className="form-group">
          <label>Name on Card:</label>
          <input type="text" placeholder="Enter the name on your card" />
        </div>
        <button type="submit" className="pay-btn">Pay</button>
      </form>
    </div>
  );
};

export default Transactionpage;
