import React, { useEffect, useState } from 'react';
import './css/ResetPassword.css'; // Create a CSS file for this component
import { useTranslation, Trans } from 'react-i18next';
import logo from '../../assets/logo.PNG'; // Replace this with the actual logo image

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailholder, setEmailholder] = useState('');

  const { t, i18n } = useTranslation();
  const handleResetPassword = () => {
    // Add your logic to handle the reset password functionality here
    // You can use the 'email' state to get the user's input
    console.log('Reset password for email:', email);
  };

  useEffect(()=>{
    if(i18n.language == 'en'){
  setEmailholder('Enter your email')
    }
    else{
        setEmailholder('E-postanızı giriniz')
    }

  },[i18n.language])

  return (
    <div className="reset-password-container">
      <img className="logo" src={logo} alt="Logo" />
      <h1 className="reset-password-heading"><Trans i18nKey="description.Rpoart0">Reset Password</Trans></h1>
      <div className="input-container">
        <input
          type="email"
          placeholder={emailholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="reset-password-button" onClick={handleResetPassword}>
        <Trans i18nKey="description.Rpoart0">Reset Password</Trans>
      </button>
    </div>
  );
};

export default ResetPassword;
