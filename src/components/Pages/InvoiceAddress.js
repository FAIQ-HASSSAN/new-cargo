import React,{useState} from 'react'
import './css/invoiceAddress.css'
import { NavLink } from 'react-router-dom';
import Db from './db';

import { useTranslation, Trans } from 'react-i18next';
function InvoiceAddress() {

  const { i18n } = useTranslation();

    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleProfileClick = () => {
      setShowSubMenu(!showSubMenu);
    };
    const [membershipType, setMembershipType] = useState('individual');

    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      country: 'country1', // Set a default country value
      taxOffice: '',
      taxNumber: '',
    });
    const [formErrors, setFormErrors] = useState({});
  
    const handleMembershipTypeChange = (event) => {
      setMembershipType(event.target.value);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      const newFormErrors = {};
  
      // Check if any required field is empty
      if (!formData.name) {
        newFormErrors.name = 'Name is required';
      }
  
      if (!formData.surname) {
        newFormErrors.surname = 'Surname is required';
      }
  
      if (!formData.address) {
        newFormErrors.address = 'Address is required';
      }
  
      if (!formData.city) {
        newFormErrors.city = 'City is required';
      }
  
      if (!formData.province) {
        newFormErrors.province = 'Province is required';
      }
  
      if (!formData.postalCode) {
        newFormErrors.postalCode = 'Postal Code is required';
      }
  
      if (!formData.country) {
        newFormErrors.country = 'Country is required';
      }
  
       if (!formData.taxOffice) {
          newFormErrors.taxOffice = 'Tax Office is required';
        }
  
        if (!formData.taxNumber) {
          newFormErrors.taxNumber = 'Tax Number is required';
        }
      
  
      setFormErrors(newFormErrors);
      return Object.keys(newFormErrors).length === 0;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (validateForm()) {
        // Process the form data or submit the form here
        console.log('Form submitted successfully!');
      } else {
        console.log('Please fill out all required fields.');
      }
    };
  
    return (
        <div className="invoice_address">
        <div className="left-container">
           <Db/>
        </div>
        <div className="iaright-container">

        <div className="section">
          <div className='back_color'>
          <h4> <Trans i18nKey="description.invoiceaddresspart1">Dear Users,</Trans></h4>
          <p><Trans i18nKey="description.invoiceaddresspart2">
            The information you provide here will be used in the invoices that will be
            issued for your payments. Therefore, the information you provide here should match the
            payment details. All entities, including individual companies (such as LTD, AŞ, etc.),
            fall under the category of Legal Entity. If you have a company, you should select the
            address type as 'Legal Entity' and fill in the fields for Tax Office and Tax Number that
            will be opened. If you do not have a company, you should select the address type as
            'Natural Person'.</Trans>
          </p>
          </div>
        </div>
        <div className="section">

          <h3><Trans i18nKey="description.invoiceaddresspart3">Invoice Addresses:</Trans></h3>
          <form>
            <div className="form-group-row">
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart4">Name:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                </div>
              </div>
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart5">Surname:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className={formErrors.surname ? 'error' : ''}
                  />
                  {formErrors.surname && <span className="error-text">{formErrors.surname}</span>}
                </div>
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart6">Address:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={formErrors.address ? 'error' : ''}
                  />
                  {formErrors.address && <span className="error-text">{formErrors.address}</span>}
                </div>
              </div>
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart7">City:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={formErrors.city ? 'error' : ''}
                  />
                  {formErrors.city && <span className="error-text">{formErrors.city}</span>}
                </div>
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart8">Province:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className={formErrors.province ? 'error' : ''}
                  />
                  {formErrors.province && <span className="error-text">{formErrors.province}</span>}
                </div>
              </div>
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart9">Postal Code:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={formErrors.postalCode ? 'error' : ''}
                  />
                  {formErrors.postalCode && <span className="error-text">{formErrors.postalCode}</span>}
                </div>
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart10">Country:</Trans></label>
               
                <select>
                  <option value="country1">Turkey</option>
                  <option value="country2">Country 2</option>
                 
                </select>
              </div>
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart11">Type of Membership:</Trans></label>
                <select value={membershipType} onChange={handleMembershipTypeChange}>
                  <option value="individual"><Trans i18nKey="description.invoiceaddresspart12">Individual </Trans></option>
                  <option value="organization"><Trans i18nKey="description.invoiceaddresspart13">Corporate</Trans></option>
                </select>
              </div>
            </div>
 
  <div className="form-group-row">        
            {membershipType === 'organization' && (
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart14">Tax Office:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="taxoffice"
                    value={formData.taxOffice}
                    onChange={handleInputChange}
                    className={formErrors.taxOffice ? 'error' : ''}
                  />
                  {formErrors.taxOffice && <span className="error-text">{formErrors.taxOffice}</span>}
                </div>
              </div>
            )}

            {membershipType === 'organization' && (
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart15">Tax Number:</Trans></label>
                <div className="input-error-container">
                  <input
                    type="text"
                    name="taxNumber"
                    value={formData.taxNumber}
                    onChange={handleInputChange}
                    className={formErrors.taxNumber ? 'error' : ''}
                  />
                  {formErrors.taxNumber && <span className="error-text">{formErrors.taxNumber}</span>}
                </div>
              </div>
            )}
        </div>    
  <div className="form-group-row">
            {membershipType === 'organization' && (
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart16">Turkish Trade Registry:</Trans></label>
                <input type="file" accept="image/*" />
                
              </div>
            )}

            {membershipType === 'organization' && (
              <div className="form-group">
                <label><Trans i18nKey="description.invoiceaddresspart17">Tax Sheet:</Trans></label>
                <input type="file" accept="image/*" />
              </div>
            )}
 </div>

            {membershipType === 'organization' && (
              <div className="form-group">
                <label>L<Trans i18nKey="description.invoiceaddresspart18">ist of Authorized Signatures:</Trans></label>
                <input type="file" accept="image/*" />
              </div>
            )}

            <div className="form-group">
              <button type="button" onClick={handleSubmit}><Trans i18nKey="description.invoiceaddresspart19">Update</Trans></button>
            </div>
          </form>
        </div>

        </div>

        
      </div>
    );
}

export default InvoiceAddress