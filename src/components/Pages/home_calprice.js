import React, { useState,useEffect } from 'react';
import './css/home_calprice.css'
import { useTranslation,Trans } from 'react-i18next';
import Db from './db'

import img from  '../../assets/Shipping-calculator-banner.jpeg'
const Homecalprice = () => {
 const {t,i18n} = useTranslation()
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [Length, setLength] = useState(0);
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);

  };

  const clearErrors = () => {
    setErrors({});
  };

  const settonull = ()=>{
  setPrice(null)
  setHeight(0)
  setLength(0)
  setWeight(0)
  setWidth(0)
  setSelectedCountry('')
  clearErrors();
  }

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


// var totalPrice=0;
//    const VW = (width*height*Length)/5000; 
//    if (weight > VW){
//     totalPrice = weight*countryvalue;
//    }
//    else{
//     totalPrice = VW*countryvalue;
//    }


//     setPrice(totalPrice);
  };

  const [errors, setErrors] = useState({});

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



  return (

<>

    <div className='h_page-container'>
<div className='h_calpriceimg'>
    <img src={img} alt=""/>

</div>
     
    <div className='calculateprice' id="calculateprice">
      <h2><Trans i18nKey="description.calpart1">Calculate Delivery Price:</Trans></h2>

      <div className="form-group">
        <label><Trans i18nKey="description.calpart2">Choose Country:</Trans> </label>
        <select value={selectedCountry} onChange={handleCountryChange}
        style={{ borderColor: errors.selectedCountry ? 'red' : '' }}
        >
          {/* <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Russia">Russia</option>
          <option value="Uzbekistan">Uzbekistan</option>
          Add more country options as needed */}

<option value="">Select Country</option>
{countryarray.map((country, index) => (  
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
        
        </select>
        {errors.selectedCountry && <div className="error">{errors.selectedCountry}</div>}
      </div>

  <div className='input_boxes'>
      <div className="form-group">
        <label><Trans i18nKey="description.calpart3">Height(max 150 cm): </Trans></label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} 
         style={{ borderColor: errors.height ? 'red' : '' }}
        />
         {errors.height && <div className="error">{errors.height}</div>}
      </div>
      <div className="form-group">
        <label><Trans i18nKey="description.calpart4">Width(max 120 cm):</Trans> </label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} 
         style={{ borderColor: errors.width ? 'red' : '' }}
        />
         {errors.width && <div className="error">{errors.width}</div>}
      </div>
      <div className="form-group">
        <label><Trans i18nKey="description.calpart5">Length(max 240 cm):</Trans> </label>
        <input type="number" value={Length} onChange={(e) => setLength(e.target.value)} 
         style={{ borderColor: errors.Length ? 'red' : '' }}
        />
         {errors.Length && <div className="error">{errors.Length}</div>}
      </div>
      <div className="form-group">
        <label><Trans i18nKey="description.calpart6">Weight(max 30 kg):</Trans> </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} 
         style={{ borderColor: errors.weight ? 'red' : '' }}
        />
         {errors.weight && <div className="error">{errors.weight}</div>}
      </div>
      {Object.keys(errors).length === 0 && ( // Render the output box only if there are no errors
        <div className="custom-output-box">
          <label><Trans i18nKey="description.calpart7">Price: </Trans></label>
          <div>{price}$</div>
        </div>
      )}

      </div>

      <div className="buttons-container">
        <button className="calculate-btn" onClick={handleCalculate}>
          <Trans i18nKey="description.calpart8">Calculate</Trans>
        </button>
        {price !== null && (
          <button className="reset-btn" onClick={() => settonull()}>
            <Trans i18nKey="description.calpart9">Reset</Trans>
          </button>
        )}
      </div>
      <div className="large-paragraph-section">
          
          <p>
          * <Trans i18nKey="description.calpart10">Gönderilerin ağırlığı hesaplanırken tartı üzerindeki ağırlığı ve hacimsel ağırlığı(desi) baz alınır.Hacimsel ağırlık hesaplamalarında gönderinizin en boy ve yükseklik değerlerinin birbiri ile çarpılmasının 5000 ile bölümü ile bulunmaktadır. (Uzunluk * Genişlik * Yükseklik) / 5000 = Ağırlık</Trans>
          <br></br>
          * <Trans i18nKey="description.calpart11">Paketin geçerli ağırlığını hacimsel ağırlığıyla karşılaştırın. İki ağırlıktan daha ağır olanı, faturalandırılabilir ağırlıktır ve fiyatı hesaplamak için bunun kullanılması gerekir.</Trans>
          <br></br>
          * <Trans i18nKey="description.calpart12">Gönderimleriniz gümrükleme gerektirmeyebilir. Gümrük ücretleri ve vergileri, öğelerinizin içeriğine ve değerine ve ülkenizin düzenlemelerine göre hesaplanır.</Trans>     
          </p>
          {/* Add more paragraphs or additional content as needed */}
        </div>
     

    </div>
    </div>
    </>
  );
};

export default Homecalprice;