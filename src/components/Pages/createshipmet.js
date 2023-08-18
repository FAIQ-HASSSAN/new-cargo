
import React,{useState} from 'react'
import './css/createshipment.css'
import Db from './db';
import { useTranslation,Trans } from 'react-i18next';
import { useEffect } from 'react';
function Createshipmet() {
  const { t, i18n } = useTranslation();

  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [Length, setLength] = useState(0);
  const [count, setcount] = useState(0);


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);

  };

  const settonull = ()=>{
    setPrice(null)
    setHeight(0)
    setLength(0)
    setWeight(0)
    setWidth(0)
    setSelectedCountry('')
    //clearErrors();
    }


    const check = ()=>{
      var da=0;
      if (  weight !== 0 ) {
        console.log('weight',da)
        //var da = count ;
        da+=1;
         setcount(da);
      }
      if (  width !== 0 ) {
        console.log(da)
        //var da = count ;
        da+=1;
        setcount(da);
      }
      if (  Length !== 0 ) {
        console.log(da)
        //var da = count ;
        da+=1;
        setcount(da);
      }
      if (  height !== 0 ) {
        console.log(da)
        //var da = count ;
        da+=1;
        setcount(da);
      }
      else{
        console.log('not working')
      }
      if (  parseFloat(selectedCountry) !== 0 ) {
        console.log(da)
        //var da = count ;
        da+=1;
        setcount(da);
      }
  console.log('count:',da)
      if(da === 5){
        console.log('hello calculate');
          handleCalculate();
          setcount(0);
         // settonull();
      }

    }

    useEffect(() => {
      // Check if both fields have valid data before calculating
      if (selectedCountry !== 0 && height !== 0 && weight !== 0 && width !== 0 && Length !== 0) {
        handleCalculate()
      } else {
         //setPrice(null)
      }
    }, [selectedCountry, height,weight,width,Length]);

    
    // calculate price api

    const fetchPrice = async (countryvalue,width,height,Length,weight) => {
      try {
        const response = await fetch(`/api/CalculatePrice?countryId=${countryvalue}&height=${height}&length=${Length}&width=${width}&weight=${weight}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            // You can include other headers if needed, e.g. Authorization
          },
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
  
        const data = await response.json();
        console.log("price:",data)
        setPrice(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
  
  
  
    const handleCalculate = () => {
  
      validateInput();
      // Assuming the same pricing criteria as before
      console.log(selectedCountry)
  
      var countryvalue=0;
      {countryarray.map((country1, index) => {
           if(selectedCountry === country1.name){
                  countryvalue=country1.id
           }
          })}
  
  console.log('value:',countryvalue)
  
  fetchPrice(countryvalue,width,height,Length,weight)
 
    };



   // const [errors, setErrors] = useState({});

    const validateInput = () => {
      const newErrors = {};
  
      // Check if the input values exceed the maximum allowed value
      if (parseFloat(height) > 150 && parseFloat(height)!==0) {
        newErrors.height = 'Height cannot exceed 150';
      }
      if (  parseFloat(height) === 0 ) {
        newErrors.height = 'Please add height';
      }
  
  
      if (parseFloat(width) > 120 && parseFloat(width)!==0) {
        newErrors.width = 'Width cannot exceed 120';
      }
      if (  parseFloat(width) === 0 ) {
        newErrors.width = 'Please add width';
      }
  
      if (parseFloat(Length) > 240  && parseFloat(Length)!==0) {
        newErrors.Length = 'Length cannot exceed 240';
      }
      if (  parseFloat(Length) === 0 ) {
        newErrors.Length = 'Please add Length';
      }
  
      if (parseFloat(weight) > 30 && parseFloat(weight)!==0 ) {
        newErrors.weight = 'Weight cannot exceed 30';
      }
  
      if (  parseFloat(weight) === 0 ) {
        newErrors.weight = 'Please add weight';
      }
  
      if (  selectedCountry === 0 ) {
        newErrors.selectedCountry = 'Please select country';
      }
  
      setErrors(newErrors);
    };


//fetch country 

const data1={
  name:'pakistan'
    }
  const [countryarray,setcountryarray]=useState([data1]);
  
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InRvZmlxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidG9maXFtYW1tYWRvdkBtYWlsLnJ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3lzdGVtIjoiOSIsImV4cCI6MTY5MjA0MDY3NywiaXNzIjoid3d3LnRlc3QuY29tIiwiYXVkIjoid3d3LnRlc3QuY29tIn0.uvgRY1X93Pwogp4PZCWBlthNyQsDl7QzF_gOoVwJD40'
  
  
    const fetchCountries = async () => {
     
      // Using fetch API
      fetch("/api/GetCountries", {
        method: "GET",
        headers: {
          Accept: "text/plain",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          return response.json();
        })
        .then((data) => {
          console.log('data:',data)
          var dani = data;
          setcountryarray(data)
         
          console.log('countryarray:',countryarray)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
  
    };
    
    useEffect(() => {
      console.log('Updated countryarray:', countryarray);
    }, [countryarray]);
  
  useEffect(()=>{
  fetchCountries();
  },[])




//create order
    const [response, setResponse] = useState(null);

    const createOrder = async () => {
      const baseUrl = 'YOUR_BASE_URL'; // Replace this with your actual base URL
      const url = `/api/CreateOrder`;
  
      const requestBody = [
        {
          fullname: receiverInfo.fullname,
          country: receiverInfo.country,
          city: receiverInfo.city,
          province: receiverInfo.province,
          address: receiverInfo.address,
          postalCode: receiverInfo.postalCode,
          phoneNumber: receiverInfo.phoneNumber,
          email:receiverInfo.phoneNumber,
         productType: productInfo.productType,
         currency:productInfo.currency,
        count:productInfo.count,
        productprice:productInfo.price,
        gtipCode:productInfo.gtipCode,
        parcelCount: parcelInfo.parcelCount,
        shippingNo: parcelInfo.shippingNo,
        weight:weight,
        length:Length,
        width:width,
        height:height,
        deliveryprice: price
        
        },
        // ... more order data ...
      ];
  
      try {
        const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/plain',
          },
          body: JSON.stringify(requestBody),
        });
      
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
      
        const responseData = await response.json();
        setResponse(responseData);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    };





    const [showReceiverInfo, setShowReceiverInfo] = useState(true);
  const [showProductInfo, setShowProductInfo] = useState(true);
  const [showParcelInfo, setShowParcelInfo] = useState(true);

  const handleReceiverInfoClick = (event) => {
    // Check if the click is on the h2 element (section header)
    const isHeaderClick = event.target.tagName.toLowerCase() === 'h2';
    if (isHeaderClick) {
      setShowReceiverInfo(!showReceiverInfo);
    }
  };

  const [receiverInfo, setReceiverInfo] = useState({
    fullname: '',
    country: '',
    city: '',
    province: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
  });

  const [productInfo, setProductInfo] = useState({
    // Initialize the form fields with default values
    productType: '',
    currency: '',
    count: '',
    price: '',
    gtipCode: '',
  });

  const [parcelInfo, setParcelInfo] = useState({
    parcelCount: '',
    shippingNo: '',
    weight: '',
    length: '',
    width: '',
    height: '',
  });

  const [errors, setErrors] = useState({});

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate receiver info
    if (!receiverInfo.fullname.trim()) {
      newErrors.fullname = 'Full Name is required';
    }
    // Add more receiver info validations if needed

    // Validate product info
    if (!productInfo.productType.trim()) {
      newErrors.productType = 'Product Type is required';
    }
    // Add more product info validations if needed

    // Validate parcel info
    if (!parcelInfo.parcelCount.trim()) {
      newErrors.parcelCount = 'Parcel Count is required';
    }
    // Add more parcel info validations if needed

    setErrors(newErrors);

    // Check if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleProductInfoClick = (event) => {
    const isHeaderClick = event.target.tagName.toLowerCase() === 'h2';
    if (isHeaderClick) {
      setShowProductInfo(!showProductInfo);
    }
  };

  const handleParcelInfoClick = (event) => {
    const isHeaderClick = event.target.tagName.toLowerCase() === 'h2';
    if (isHeaderClick) {
      setShowParcelInfo(!showParcelInfo);
    }
  };

  const handleInputClick = (event) => {
    // Prevent event propagation to parent section
    event.stopPropagation();
  };

  const [productForms, setProductForms] = useState([{ id: 1 }]);

  const handleAddProduct = () => {
    // Generate a new unique ID for the new product form
    const newId = productForms.length > 0 ? productForms[productForms.length - 1].id + 1 : 1;
    setProductForms([...productForms, { id: newId }]);
  };

  const handleDeleteProduct = (id) => {
    const updatedForms = productForms.filter((form) => form.id !== id);
    setProductForms(updatedForms);
  };
  const [showShippingModal, setShowShippingModal] = useState(false);

  const handleSaveShipping = () => {
    setShowShippingModal(true);
  };

  return (
    <div className="create_shipment">
    <div className='left-container'>
      <Db/>
    </div>
   
    <div className="right-container">
        <div className={`section ${showReceiverInfo ? 'active' : ''}`} onClick={handleReceiverInfoClick}>
       
          <h2><Trans i18nKey="description.createshipmentpart1">Receiver Information</Trans></h2>
          
          {showReceiverInfo && (
             <form>
              <div className='daniform'>

                <div className='daniform_row'>
             <div className="form-group">
               <label htmlFor="fullname"><Trans i18nKey="description.createshipmentpart2">Full Name:</Trans></label>
               <input
        type="text"
        id="fullname"
        name="fullname"
        value={receiverInfo.fullname}
        onChange={(e) => setReceiverInfo({ ...receiverInfo, fullname: e.target.value })}
        onClick={handleInputClick}
        className={errors.fullname ? 'error' : ''}
      />
      {errors.fullname && <div className="error-message">{errors.fullname}</div>}
             </div>
 
             <div className="form-group">
               <label htmlFor="country"><Trans i18nKey="description.createshipmentpart3">Country:</Trans></label>
               <select value={selectedCountry} onChange={handleCountryChange}>
               <option value="">Select Country</option>
{countryarray.map((country, index) => (  
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
               </select>
             </div>
 
             </div>

             <div className='daniform_row'>
             <div className="form-group">
               <label htmlFor="city"><Trans i18nKey="description.createshipmentpart4">City:</Trans></label>
               <input type="text" id="city" name="city" 
               value={receiverInfo.city}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, city: e.target.value })}
               onClick={handleInputClick} />
             </div>
 
             <div className="form-group">
               <label htmlFor="province"><Trans i18nKey="description.createshipmentpart5">Province:</Trans></label>
               <input type="text" id="province" name="province" 
               value={receiverInfo.province}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, province: e.target.value })}
               onClick={handleInputClick} />
             </div>
 
             </div>
             <div className='daniform_row'>

             <div className="form-group">
               <label htmlFor="address"><Trans i18nKey="description.createshipmentpart6">Address:</Trans></label>
               <input type="text" id="address" name="address" 
               value={receiverInfo.address}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, address: e.target.value })}
               onClick={handleInputClick}/>

             </div>
 
             <div className="form-group">
               <label htmlFor="postalCode"><Trans i18nKey="description.createshipmentpart7">Postal Code:</Trans></label>
               <input type="number" id="postalCode" name="postalCode"  
               value={receiverInfo.postalCode}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, postalCode: e.target.value })}
               onClick={handleInputClick}/>
             </div>
 </div>

    <div className='daniform_row'>
             <div className="form-group">
               <label htmlFor="phoneNumber"><Trans i18nKey="description.createshipmentpart8">Phone Number:</Trans></label>
               <input type="text" id="phoneNumber" name="phoneNumber"  
               value={receiverInfo.phoneNumber}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, phoneNumber: e.target.value })}
               onClick={handleInputClick}/>
             </div>
 
             <div className="form-group">
               <label htmlFor="email"><Trans i18nKey="description.createshipmentpart9">Email:</Trans></label>
               <input type="email" id="email" name="email"  
               value={receiverInfo.email}
               onChange={(e) => setReceiverInfo({ ...receiverInfo, email: e.target.value })}
               onClick={handleInputClick}/>
             </div>

             </div>
             </div>
           </form>
          )}
         

        </div>

        <div className={`section ${showProductInfo ? 'active' : ''}`} onClick={handleProductInfoClick}>
          <h2><Trans i18nKey="description.createshipmentpart10">Product Information</Trans></h2>
        
          {showProductInfo && (
             <div>
             {productForms.map((productForm) => (
                <div key={productForm.id} className="product-form-row">
               <form key={productForm.id}>
                 <div className="product-form-row">
                
                   <div className="form-group">
                     <label htmlFor={`productType-${productForm.id}`}><Trans i18nKey="description.createshipmentpart11">Product Type:</Trans></label>
                     <input
                type="text"
                id={`productType-${productForm.id}`}
                name={`productType-${productForm.id}`}
                value={productInfo.productType}
                onChange={(e) => setProductInfo({ ...productInfo, productType: e.target.value })}
                onClick={handleInputClick}
                className={errors.productType ? 'error' : ''}
              />
              {errors.productType && <div className="error-message">{errors.productType}</div>}

                   </div>
                   <div className="form-group">
                     <label htmlFor={`currency-${productForm.id}`}><Trans i18nKey="description.createshipmentpart12">Currency:</Trans></label>
                     <input type="number" id={`currency-${productForm.id}`} name={`currency-${productForm.id}`} 
                      value={productInfo.currency}
                      onChange={(e) => setProductInfo({ ...productInfo, currency: e.target.value })}
                     onClick={handleInputClick} />
                   </div>
                   
                   
                   <div className="form-group">
                     <label htmlFor={`Count-${productForm.id}`}><Trans i18nKey="description.createshipmentpart13">Count:</Trans></label>
                     <input type="text" id={`Count-${productForm.id}`} name={`Count-${productForm.id}`} 
                      value={productInfo.count}
                      onChange={(e) => setProductInfo({ ...productInfo, count: e.target.value })}
                     onClick={handleInputClick} />
                   </div>
                   <div className="form-group">
                     <label htmlFor={`Price-${productForm.id}`}><Trans i18nKey="description.createshipmentpart14">Price:</Trans></label>
                     <input type="number" id={`Price-${productForm.id}`} name={`Price-${productForm.id}`} 
                      value={productInfo.price}
                      onChange={(e) => setProductInfo({ ...productInfo, price: e.target.value })}
                     onClick={handleInputClick} />
                   </div>
                   
                    
                   <div className="form-group">
                     <label htmlFor={`Gtip Code-${productForm.id}`} className='gtip'><Trans i18nKey="description.createshipmentpart15">GTIP Code(optional):</Trans></label>
                     <input type="text" id={`Gtip Code-${productForm.id}`} name={`Gtip Code-${productForm.id}`} 
                      value={productInfo.gtipCode}
                      onChange={(e) => setProductInfo({ ...productInfo, gtipCode: e.target.value })}
                     onClick={handleInputClick} />
                   </div>
                 
                   </div>
                 
               </form>
               <div className="buttons-container">
               <button className="delete-product-btn" onClick={() => handleDeleteProduct(productForm.id)}>
                    <Trans i18nKey="description.createshipmentpart16">Delete</Trans>
                  </button>
                  </div>

               </div>
               
             ))}
             <div className="buttons-container">
               <button type="button" className="add-product-btn" onClick={handleAddProduct}>
                 <Trans i18nKey="description.createshipmentpart17">Add Product</Trans>
               </button>
               
             </div>
           </div>
          )}
          
        
        </div>

        <div className={`section ${showParcelInfo ? 'active' : ''}`} onClick={handleParcelInfoClick}>
          <h2><Trans i18nKey="description.createshipmentpart18">Parcel Information</Trans></h2>
        
          {showParcelInfo && (

            <form>

              <div className='daniform'>

                <div className='daniform_row'>
           <div className="form-group">
              <label htmlFor="parcelCount"><Trans i18nKey="description.createshipmentpart19">Parcel count:</Trans></label>
              <input
        type="number"
        id="parcelCount"
        name="parcelCount"
        value={parcelInfo.parcelCount}
        onChange={(e) => setParcelInfo({ ...parcelInfo, parcelCount: e.target.value })}
        className={errors.parcelCount ? 'error' : ''}
      />
      {errors.parcelCount && <div className="error-message">{errors.parcelCount}</div>}
      
            </div>

            <div className="form-group">
              <label htmlFor="shippingNo"><Trans i18nKey="description.createshipmentpart20">Shipping no:</Trans></label>
              <input type="number" id="shippingNo" name="shippingNo" 
               value={parcelInfo.shippingNo}
               onChange={(e) => setParcelInfo({ ...parcelInfo, shippingNo: e.target.value })}
              />
            </div>
            </div>

            <div className='daniform_row'>
            <div className="form-group">
              <label htmlFor="weight"><Trans i18nKey="description.createshipmentpart21">Weight (kg):</Trans></label>
              <input type="number" id="weight" name="weight"  value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="length"><Trans i18nKey="description.createshipmentpart22">Length (cm):</Trans></label>
              <input type="number" id="length" name="length"  value={Length} onChange={(e) => setLength(e.target.value)}/>
            </div>
            </div>
            <div className='daniform_row'>
            <div className="form-group">
              <label htmlFor="width"><Trans i18nKey="description.createshipmentpart23">Width (cm):</Trans></label>
              <input type="number" id="width" name="width"  value={width} onChange={(e) => setWidth(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="height"><Trans i18nKey="description.createshipmentpart24">Height (cm):</Trans></label>
              <input type="number" id="height" name="height"   value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            </div>

            <div className="shipping-price">
              <h3><Trans i18nKey="description.createshipmentpart25">Shipping Price:</Trans></h3>
              {price !== null &&   <p> <b>{price}$ </b></p>} 
            </div>

            <div className="form-group">
              <button type="button" className="save-shipping-btn" onClick={createOrder}>
                <Trans i18nKey="description.createshipmentpart27">Save Shipping</Trans>
              </button>
            </div>


            {/*<div className="form-group">
              <button type="button" className="create-shipping-btn" >
                Create Shipping
              </button>
            </div>*/}
 </div>

          </form>
          )}

         
        </div>
      </div>

      {/* Pop-up modal for shipping details */}
      {showShippingModal && (
        <div className="shipping-modal">
          <h2><Trans i18nKey="description.createshipmentpart28">Shipping saved Successfully</Trans></h2>
          <p><Trans i18nKey="description.createshipmentpart29">For payment for shipping and printing STICKER go to SHIPPINGS page</Trans> </p>
          <button type="button" className="close-modal-btn" onClick={() => setShowShippingModal(false)}>
            <Trans i18nKey="description.createshipmentpart30">Close</Trans>
          </button>
        </div>
      )}

</div>
  )
}

export default Createshipmet