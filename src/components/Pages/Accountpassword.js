import React,{useState} from 'react'
import './css/Accountpassword.css'
import Db from './db';
import {   useTranslation,Trans } from 'react-i18next';
function Accountpassword() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newFormErrors = {};

    if (!formData.oldPassword) {
      newFormErrors.oldPassword = 'Old Password is required';
    }

    if (!formData.newPassword) {
      newFormErrors.newPassword = 'New Password is required';
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newFormErrors.confirmPassword = "Passwords don't match";
    }

    setFormErrors(newFormErrors);
    return Object.keys(newFormErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Process the form data or submit the form here
      console.log('Password change request submitted successfully!');
    } else {
      console.log('Please fill out all required fields correctly.');
    }
  };

  return (
    <div className="account_password">
  
  <div className='leftcontainer'>
            <Db/>
          </div>
    <div className="acright-container">
    <div className="section">
          <h2><Trans i18nKey="description.accountpassswordpart1">Password Change:</Trans></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><Trans i18nKey="description.accountpassswordpart2">Old Password:</Trans></label>
              <div className="input-error-container">
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  className={formErrors.oldPassword ? 'error' : ''}
                />
                {formErrors.oldPassword && (
                  <span className="error-text">{formErrors.oldPassword}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label><Trans i18nKey="description.accountpassswordpart3">New Password:</Trans></label>
              <div className="input-error-container">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={formErrors.newPassword ? 'error' : ''}
                />
                {formErrors.newPassword && (
                  <span className="error-text">{formErrors.newPassword}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label><Trans i18nKey="description.accountpassswordpart4">Confirm Password:</Trans></label>
              <div className="input-error-container">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={formErrors.confirmPassword ? 'error' : ''}
                />
                {formErrors.confirmPassword && (
                  <span className="error-text">{formErrors.confirmPassword}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <button type="submit"><Trans i18nKey="description.accountpassswordpart5">Change Password</Trans></button>
            </div>
          </form>
        </div>

     {
      /*   <div className="two-factor-auth">
          <h2>Two-Factor Authentication</h2>
          <div>          
            <div className="toggle-switch">
              <label className="switch">
                <input type="checkbox" checked={twoFactorAuth} onChange={handleTwoFactorAuthChange} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div> */
     }
        
    </div>
  </div>
  )
}

export default Accountpassword