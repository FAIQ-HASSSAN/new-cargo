import React, { useState } from 'react';
import './css/editshippingrow.css';
import { Trans } from 'react-i18next';
import { useParams, useNavigate} from 'react-router-dom';
import Db from './db';
function EditShippingData({ rowData, onSave, onCancel }) {

 const {id} = useParams()
 console.log('id:',id)
  //the data here will be an object since an object was

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    id: rowData?.id || '',
    pay: rowData?.pay || '',
    status: rowData?.status || '',
    label: rowData?.label || '',
    receiver: rowData?.receiver || '',
    orderNumber: rowData?.orderNumber || '',
    country: rowData?.country || '',
    count: rowData?.count || '',
    value: rowData?.value || '',
    date: rowData?.date || '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file, // Save the selected file in the formData
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary operations to update the data (e.g., API call, state update).
    console.log('Updated Data:', formData);
    navigate('/shipping',{state:formData});
  };



  const handleCancel = () => {
    // Call the onCancel function passed from the parent component
    onCancel();
    navigate('/shipping'); // Redirect back to the shipping page
  };


  return (

   

      
    <div className="edit-shipping-data">
      <h2><Trans i18nKey="description.editshippingspart0">Edit Shipping Data</Trans></h2>
      <form >
      <div className="input-group">
        <label>
          <p><Trans i18nKey="description.editshippingspart1">ID:</Trans></p>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
        <label>
         <p> <Trans i18nKey="description.editshippingspart2">Pay/Paid:</Trans></p>
          <input type="text" name="pay" value={formData.pay} onChange={handleChange} />
        </label>

        </div>
   
        <div className="input-group">
        <label>
          <p><Trans i18nKey="description.editshippingspart3">Status:</Trans></p>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Status">-</option>
            <option value="Warehouse">Warehouse</option>
            <option value="On cargo company">On cargo company</option>
            <option value="On the way">On the way</option>
            <option value="Destination">Destination</option>
            <option value="Customs">Customs</option>
            <option value="Ready to delivery">Ready to delivery</option>
            <option value="Not delivered">Not delivered</option>
            <option value="Delivered">Delivered</option>
            <option value="Error">Error</option>
          </select>
        </label>
        <label>
          <p><Trans i18nKey="description.editshippingspart4">Label:</Trans></p>
          <input type="text" name="label" value={formData.label} placeholder={formData.label} onChange={handleChange} />
        </label>

</div>
<div className="input-group">
        <label>
          <p><Trans i18nKey="description.editshippingspart5">Receiver:</Trans></p>
          <input type="text" name="receiver" value={formData.receiver} onChange={handleChange} />
        </label>
        <label>
          <p><Trans i18nKey="description.editshippingspart6">Order Number:</Trans></p>
          <input type="text" name="orderNumber" value={formData.orderNumber} onChange={handleChange} />
        </label>
</div>
<div className="input-group">
        <label>
          <p><Trans i18nKey="description.editshippingspart7">Country:</Trans></p>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <label>
          <p><Trans i18nKey="description.editshippingspart8">Count:</Trans></p>
          <input type="text" name="count" value={formData.count} onChange={handleChange} />
        </label>
</div>
<div className="input-group">
        <label>
          <p><Trans i18nKey="description.editshippingspart9">Value:</Trans></p>
          <input type="text" name="value" value={formData.value} onChange={handleChange} />
        </label>
        <label>
          <p><Trans i18nKey="description.editshippingspart10">Date:</Trans></p>
          <input type="date" name="date" value={formData.date} onChange={handleChange}  className='datefield'/>
        </label>
</div>
<div className='input-group'>
<label>
              <p><Trans i18nKey="description.editshippingspart11">Upload Image:</Trans> </p>
              <input
                type="file"
                name="image"
                style={{ display: 'none' }} // Hide the default file input
                onChange={handleFileUpload}
              />
              <div className='input-group'>
              <button
                className="upload-button"
                onClick={() => {
                  const fileInput = document.querySelector('input[type="file"]');
                  if (fileInput) {
                    fileInput.click(); // Trigger the file input when the button is clicked
                  }
                }}
              >
                <Trans i18nKey="description.editshippingspart12">Choose File</Trans>
              </button>
              {formData.image && <span className='filename'>{formData.image.name}</span>} {/* Show selected file name */}
              </div>
            </label>

</div>
     <div className='edani'>
        <button  onClick={handleSubmit} type="button"><Trans i18nKey="description.editshippingspart13">Update</Trans></button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        </div>
      </form>
    </div>
    
  );
}

export default EditShippingData;
