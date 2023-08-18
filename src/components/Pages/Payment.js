// PaymentPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Payment.css'; // Import your custom CSS file for styling
import { useTranslation, Trans } from 'react-i18next';
import Db from './db'
const Payment = () => {

  const { t, i18n } = useTranslation();
  const [amount,setamount] = useState(null)
  return (
    <div className="payment-page">
         
      <div className='p_db'>
               <Db/>
      </div>

      <div className='pr_container'>
      {/* First Section */}
      <div className="top-balance">
        <div className="balance-details">
          <p><Trans i18nKey="description.paymentpart1">TopUP Balance:</Trans></p>
          <p>{amount}</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="payment-section1">
        <h2><Trans i18nKey="description.paymentpart2">Payment:</Trans></h2>
      <div className="payment-section">
        <input type="text" placeholder="Enter Payment Amount" />
        <Link to="/transactionpage">
          <button><Trans i18nKey="description.paymentpart3">Pay</Trans></button>
        </Link>
      </div>
      <div>
        <p><Trans i18nKey="description.paymentpart4">3% Commision will be charged</Trans></p>
      </div>
      </div>

      {/* Third Section */}
      <div className="transaction-history">
        <h2><Trans i18nKey="description.paymentpart5">Transaction History:</Trans></h2>
        <div className="transaction-item">
          <p><Trans i18nKey="description.paymentpart6">Date: 2023-07-25</Trans></p>
          <p><Trans i18nKey="description.paymentpart7">Amount: $50</Trans></p>
          <p><Trans i18nKey="description.paymentpart8">Description: Payment for XYZ</Trans></p>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Payment;
