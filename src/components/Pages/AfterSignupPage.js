// SignupPage.js
import React ,{useState}from 'react';
import './css/AfterSignuppage.css'; // Import your custom CSS file for styling
import Db from './db';
import './css/db.css'
import { useTranslation,Trans } from 'react-i18next';
import { MenuBookOutlined } from '@mui/icons-material';
import { MenuSquare } from 'lucide-react';
const AfterSignupPage = () => {
   const {t,i18n} = useTranslation();
  const [membershipType, setMembershipType] = useState('individual');

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    idNumber: '',
    phoneNumber: '',
    companyName: '',
    taxNumber: '',
    taxOffice: '',
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
      if(i18n.language === 'en'){
        newFormErrors.name = 'Name is required';
      }
      else{
        newFormErrors.name = '97y7y97y97';
      }
      
    }
    if (!formData.surname) {

      if(i18n.language === 'en'){
        newFormErrors.surname = 'Name is required';
      }
      else{
        newFormErrors.surname = '97y7y97y97';
      }
      
    }
    if (!formData.address) {

      if(i18n.language === 'en'){
        newFormErrors.address = 'Name is required';
      }
      else{
        newFormErrors.address = '97y7y97y97';
      }
      
    }
    if (!formData.city) {

     if(i18n.language === 'en'){
        newFormErrors.city = 'Name is required';
      }
      else{
        newFormErrors.city = '97y7y97y97';
      }
      
    }
    if (!formData.province) {

     if(i18n.language === 'en'){
        newFormErrors.province = 'Name is required';
      }
      else{
        newFormErrors.province = '97y7y97y97';
      }
      
    }
    if (!formData.postalCode) {
     
      if(i18n.language === 'en'){
        newFormErrors.postalCode = 'Name is required';
      }
      else{
        newFormErrors.postalCode= '97y7y97y97';
      }
      
    }
    if (!formData.idNumber) {

      if(i18n.language === 'en'){
        newFormErrors.idNumber = 'Name is required';
      }
      else{
        newFormErrors.idNumber = '97y7y97y97';
      }
      
    }
    if (!formData.phoneNumber) {
      
      if(i18n.language === 'en'){
        newFormErrors.phoneNumber = 'Name is required';
      }
      else{
        newFormErrors.phoneNumber = '97y7y97y97';
      }
      

    }
    if (!formData.companyName) {

      if(i18n.language === 'en'){
        newFormErrors.companyName = 'Name is required';
      }
      else{
        newFormErrors.companyName = '97y7y97y97';
      }
      
    }
    if (!formData.taxNumber) {

      if(i18n.language === 'en'){
        newFormErrors.taxNumber = 'Name is required';
      }
      else{
        newFormErrors.taxNumber = '97y7y97y97';
      }
      
    }
    if (!formData.taxOffice) {

    if(i18n.language === 'en'){
        newFormErrors.taxOffice = 'Name is required';
      }
      else{
        newFormErrors.taxOffice = '97y7y97y97';
      }
      
    }
   
    // Add validations for other required fields here

    setFormErrors(newFormErrors);
    return Object.keys(newFormErrors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Don't disable the button, even if there are errors
    // Let the user submit the form to see the error messages
    validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Process the form data or submit the form here
      console.log('Form submitted successfully!');
    } else {
      console.log('Please fill out all required fields.');
    }
  };

 

  return (
    <div className="signup-page">
      <div className="sleft-container">
        <div className='log'><MenuSquare/></div>
        <Db/>
      </div>

      {/* Right Container */}
      <div className="sright-container">
       <div className='settings'>
          <h2><Trans i18nKey="description.settingspart1">Settings:</Trans></h2>
       </div>
        <form>
          {/* Add form fields and input elements here */}
          <div className="form-group1">
            <div className="form-group">
            <label><Trans i18nKey="description.settingspart2">Name:</Trans></label>
            <div className="input-error-container">
            <input  
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={formErrors.name ? 'error' : ''}/>
               {formErrors.name && <span className="error-text">{formErrors.name}</span>}
               </div>
          </div>
          <div className="form-group">
            <label><Trans i18nKey="description.settingspart3">Surname:</Trans></label>
            <div className="input-error-container">
            <input  
             type="text"
             name="surname"
             value={formData.surname}
             onChange={handleInputChange}
             className={formErrors.surname ? 'error' : ''} />
              {formErrors.surname && <span className="error-text">{formErrors.surname}</span>}
           </div>

          </div>
          </div>

          <div className="form-group1">
            <div className="form-group">
            <label><Trans i18nKey="description.settingspart4">Address:</Trans></label>
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
            <label><Trans i18nKey="description.settingspart5">City:</Trans></label>
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


          <div className="form-group1">
            <div className="form-group">
            <label><Trans i18nKey="description.settingspart6">Province:</Trans></label>
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
            <label><Trans i18nKey="description.settingspart7">Postal Code:</Trans></label>
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


          <div className="form-group1">
            <div className="form-group">
           
             <label><Trans i18nKey="description.settingspart8">Type of Membership:</Trans></label>
             <div className="input-error-container">
            <select value={membershipType} onChange={handleMembershipTypeChange} className="input-error-container1" >
              <option value="individual"><Trans i18nKey="description.settingspart9">Individual</Trans></option>
              <option value="organization"><Trans i18nKey="description.settingspart10">Corporate</Trans></option>
            </select>
            </div>
          </div>
          <div className="form-group">
            <label><Trans i18nKey="description.settingspart11">ID Number:</Trans></label>
            <div className="input-error-container">
            <input 
             type="text"
             name="idNumber"
             value={formData.idNumber}
             onChange={handleInputChange}
             className={formErrors.idNumber ? 'error' : ''}
            />
             {formErrors.idNumber && <span className="error-text">{formErrors.idNumber}</span>}
             </div>
          </div>
          </div>

          <div className="form-group1">
            <div className="form-group">
            <label><Trans i18nKey="description.settingspart12">Phone Number:</Trans></label>
            <div className="input-error-container">
            <input 
             type="text"
             name="phoneNumber"
             value={formData.phoneNumber}
             onChange={handleInputChange}
             className={formErrors.phoneNumber ? 'error' : ''}
            />
             {formErrors.phoneNumber && <span className="error-text">{formErrors.phoneNumber}</span>}
             </div>
          </div>
          {membershipType === 'organization' && (
            <div className="form-group">
              <label><Trans i18nKey="description.settingspart13">Company Name:</Trans></label>
              <div className="input-error-container">
              <input 
               type="text"
               name="companyName"
               value={formData.companyName}
               onChange={handleInputChange}
               className={formErrors.companyName ? 'error' : ''}
              />
               {formErrors.companyName && <span className="error-text">{formErrors.companyName}</span>}
               </div>
            </div>
          )}
          </div>

          <div className="form-group1">
          {membershipType === 'organization' && (
            <div className="form-group">
              <label><Trans i18nKey="description.settingspart14">Tax Number:</Trans></label>
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
            {membershipType === 'organization' && (
            <div className="form-group">
              <label><Trans i18nKey="description.settingspart15">Tax Office:</Trans></label>
              <div className="input-error-container">
              <input 
               type="text"
               name="taxOffice"
               value={formData.taxOffice}
               onChange={handleInputChange}
               className={formErrors.taxOffice ? 'error' : ''}
              />
               {formErrors.taxOffice && <span className="error-text">{formErrors.taxOffice}</span>}
               </div>
            </div>
          )}
          </div>


          <div className="form-group">
            <button type="submit" onClick={handleSubmit} ><Trans i18nKey="description.settingspart16"> Update</Trans></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AfterSignupPage;
